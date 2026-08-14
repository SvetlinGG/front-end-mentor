from PIL import Image
img = Image.open('preview.jpg')
w, h = img.size
print(f"Canvas: {w}x{h}")

def is_white(px): return px[0]>245 and px[1]>240 and px[2]>230
def is_terra(px): return 130<px[0]<210 and px[1]<120 and px[2]<90

# Find receipt card bounding box by scanning multiple y levels
print("\n--- Receipt card bounding box ---")
rx_min, rx_max, ry_min, ry_max = 9999,0,9999,0
for y in range(50, 750):
    for x in range(250, 900):
        px = img.getpixel((x,y))[:3]
        if is_white(px):
            if x < rx_min: rx_min = x
            if x > rx_max: rx_max = x
            if y < ry_min: ry_min = y
            if y > ry_max: ry_max = y
            break
print(f"  x: {rx_min} to {rx_max}, width={rx_max-rx_min}")
print(f"  y: {ry_min} to {ry_max}, height={ry_max-ry_min}")
print(f"  center: ({(rx_min+rx_max)//2}, {(ry_min+ry_max)//2})")

# Find terracotta card bounding box
print("\n--- Terracotta card bounding box ---")
tx_min, tx_max, ty_min, ty_max = 9999,0,9999,0
for y in range(50, 750):
    for x in range(600, 1300):
        px = img.getpixel((x,y))[:3]
        if is_terra(px):
            if x < tx_min: tx_min = x
            if x > tx_max: tx_max = x
            if y < ty_min: ty_min = y
            if y > ty_max: ty_max = y
            break
print(f"  x: {tx_min} to {tx_max}, width={tx_max-tx_min}")
print(f"  y: {ty_min} to {ty_max}, height={ty_max-ty_min}")
print(f"  center: ({(tx_min+tx_max)//2}, {(ty_min+ty_max)//2})")

# Main content area starts after sidebar (~70px)
print(f"\n--- Relative to main content area (starts x=70) ---")
print(f"  Receipt card left offset: {rx_min-70}")
print(f"  Terracotta card left offset: {tx_min-70}")
print(f"  Main content width: {w-70}")
print(f"  Receipt card center x in main: {(rx_min+rx_max)//2 - 70}")
print(f"  Terracotta card center x in main: {(tx_min+tx_max)//2 - 70}")
print(f"  Both cards combined center x in main: {((rx_min+rx_max)//2 + (tx_min+tx_max)//2)//2 - 70}")
print(f"  Both cards combined center as % of main: {(((rx_min+rx_max)//2 + (tx_min+tx_max)//2)//2 - 70) / (w-70) * 100:.1f}%")
