import cv2
import sys


casc_path = "haarcascade_frontalface_default.xml"
face_cascade = cv2.CascadeClassifier(casc_path)

image = cv2.imread("meetup.png")
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

faces = face_cascade.detectMultiScale(
    gray,
    scaleFactor=1.1,
    minNeighbors=5,
    minSize=(30, 30),
    flags=cv2.CASCADE_SCALE_IMAGE
)

print(f"The algorithm found {len(faces)} faces in the following image.")

for (x, y, w, h) in faces:
    cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)

cv2.imshow("Faces found", image)
cv2.waitKey(0)