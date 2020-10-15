import cv2
import os
import sys

def process_image(img, min_side_w, min_side_h):
    size = img.shape
    h, w = size[0], size[1]
    scale_w = w / float(min_side_w)
    scale_h = h / float(min_side_h)
    scale = max(scale_w, scale_h)
    new_w, new_h = int(w/scale), int(h/scale)
    resize_img = cv2.resize(img, (new_w, new_h))
    if new_w % 2 != 0 and new_h % 2 == 0:
        top, bottom, left, right = (min_side_h-new_h)/2, (min_side_h-new_h)/2, (min_side_w-new_w)/2 + 1, (min_side_w-new_w)/2
    elif new_h % 2 != 0 and new_w % 2 == 0:
        top, bottom, left, right = (min_side_h-new_h)/2 + 1, (min_side_h-new_h)/2, (min_side_w-new_w)/2, (min_side_w-new_w)/2
    elif new_h % 2 == 0 and new_w % 2 == 0:
        top, bottom, left, right = (min_side_h-new_h)/2, (min_side_h-new_h)/2, (min_side_w-new_w)/2, (min_side_w-new_w)/2
    else:
        top, bottom, left, right = (min_side_h-new_h)/2 + 1, (min_side_h-new_h)/2, (min_side_w-new_w)/2 + 1, (min_side_w-new_w)/2
 
    pad_img = cv2.copyMakeBorder(resize_img, int(top), int(bottom), int(left), int(right), cv2.BORDER_CONSTANT, value=[255,255,255]) #从图像边界向上,下,左,右扩的像素数目
    return pad_img

path = "./img/"
for filename in os.listdir(path):
    im = cv2.imread(path + filename)
    img_new = process_image(im, 750, 500)
    cv2.imwrite(path +'scale_'+filename, img_new)
