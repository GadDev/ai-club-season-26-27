"""Trace approved lettering into Bezier paths. Optional build-time tool: pip install potracer pillow numpy scipy.
The original image remains the texture layer; the traced paths replace only lettering and arrow edges.
"""
from pathlib import Path
import numpy as np
from PIL import Image
from scipy import ndimage
import potrace
root=Path(__file__).resolve().parents[1]
a=np.array(Image.open(root/'design/references/signal-index-concept.webp').convert('RGB'))[:281]
h,w=a.shape[:2]
cream=(a[:,:,0]>165)&(a[:,:,1]>165)&(a[:,:,2]>155)
zone=np.zeros((h,w),bool)
for x0,y0,x1,y1 in [(20,12,550,276),(565,38,815,215),(566,215,1000,245),(1185,28,1365,158),(1260,176,1367,277)]:zone[y0:y1,x0:x1]=True
cream &= zone
orange=(a[:,:,0]>155)&(a[:,:,1]<145)&(a[:,:,2]<110)
zone[:]=False
zone[190:255,20:220]=True
zone[:,1368:]=True
orange &= zone
labels,n=ndimage.label(orange)
sizes=np.bincount(labels.ravel()); orange &= sizes[labels]>35

def path(mask):
 result=[]
 for curve in potrace.Bitmap(~mask).trace(turdsize=1,alphamax=1,opticurve=True,opttolerance=.12):
  p=curve.start_point;result.append(f'M{p.x:.2f},{p.y:.2f}')
  for s in curve:
   e=s.end_point
   if s.is_corner:result.append(f'L{s.c.x:.2f},{s.c.y:.2f} {e.x:.2f},{e.y:.2f}')
   else:result.append(f'C{s.c1.x:.2f},{s.c1.y:.2f} {s.c2.x:.2f},{s.c2.y:.2f} {e.x:.2f},{e.y:.2f}')
  result.append('Z')
 return ' '.join(result)
parts=['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1672 281">']
for mask,color in [(cream,'#F7F3E8'),(orange,'#FF512F')]:
 d=path(mask)
 # A narrow ink under-stroke covers the old bitmap's soft antialiased edge.
 parts.append(f'<path d="{d}" fill="{color}" stroke="#11222E" stroke-width="1.4" stroke-linejoin="round" paint-order="stroke fill" fill-rule="evenodd"/>')
parts.append('</svg>')
(root/'src/assets/hero-lettering.svg').write_text('\n'.join(parts))
print('Traced hero lettering:',(root/'src/assets/hero-lettering.svg').stat().st_size,'bytes')
