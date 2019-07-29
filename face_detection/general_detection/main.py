import cv2
import sys


casc_path = "haarcascade_frontalface_default.xml"
face_cascade = cv2.CascadeClassifier(casc_path)

def image_or_video():
    user_selection = input("Enter 'image' if you want to detect in an image or 'video' if you want to detect in a video. ")

    if user_selection == "image":
        return image = cv2.imread(input("Enter the filepath of your image"))
    elif user_selection == "video":
        return video = cv2.VideoCapture(input("Enter the filepath of your video"))
    else:
        print("Your selection must be 'image' or 'video' ")
        image_or_video()



gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

video_capture = cv2.VideoCapture(0)

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