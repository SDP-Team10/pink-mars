---
title: How It Works
sections:
  - type: hero_section
    title: How does our System Work?
    align: center
  - type: content_section
    content: >
      ![](/images/evolution.png)
  - type: content_card
    title: Startup
    content: >-
      <h3>Physical setup</h3>
      The robot needs to travel up and down a ramp to get on and off the train. Once in the carriage, it will centre itself using the included stickers placed on doors.

      ![](/images/yellow_sticker.png =100x20)

      As it goes down the aisle, the left distance sensor is used to detect the presence of a table. Upon reaching a table, the robot moves into position to begin wiping as well as opening its bin compartment. It first assesses whether there are any valuables in the way before wiping, and avoids cleaning the section if so. If it deems the section clear of valuables, the robot will wipe with a sponge attached to the end of the arm to clean the table, while pulling rubbish towards it and into the integrated bin. Once a table has been cleaned, the robot reverts back to detecting tables, finding and cleaning them as it goes, as well as turning around at the end of carriage around to clean the other side of the carriage. Once all the tables have been cleaned and the robot has reached the door it came in through, the front camera is used to detect the button to operate the door, cleaning it before pressing it to exit the carriage.

      <h3>App Setup</h3>
      Railly Clean will work directly out of the box.
      A mobile app is also provided to allow our customers to enter in certain setup parameters to customise and optimise Railly Clean to different trains, right on your smartphones.

      Please ensure that your smartphone has Bluetooth enabled and is connected to the Internet—this allows us to bring Railly Clean important updates!

      Once you have installed and opened the app, you will see a page to enter in different parameters.
      The guide provides you an overview on how to set up the parameters.

      Select the model number of the robot UUID picked up by the phone’s Bluetooth connection.

      Please fill in Table Height, Aisle Width and Pole Width to optimise the robot’s performance.

      Tap Confirm Configurations to finish the process. Clicking this button will transfer the environment setup data to the robot.


      ![](/images/robotlabelled.png "sample title")

  - type: content_card
    title: The Arm
    content: >-

      One of the key components of the robot is the arm: this part of the robot underwent the most changes as the project progressed. Initially the design planned to use a pre-made arm (the Pincher X 100 Robotic Arm). However, its small size was rather ineffective for the job. The second iteration of the arm was a two-section arm that allowed for movement in the middle joint. While it worked well for wiping tables, the arm principally was too large and didn’t tuck down to a small enough size for moving through the carriage's door.

      ![](/images/2secsweep.png)

      After a number of iterations and creation of several designs, the final arm was created. The arm comprises of 3 sections and a cleaning head that can be manipulated using rotational motors. This new arm allows the same sweeping motion as the initial design but is a much more flexible design which allowed the arm to tuck in and take up a much smaller area when not in use.

      The final design initially proved to be difficult to control, the added joint meant that a dedicated kinematics function had to be created to calculate the position and forces required by the motors so that carry the arm can carry out a sweeping motion. Despite this initial setback the arm now has a smooth and consistent sweeping motion which cleans the table and pushes rubbish into its bin.

      ![](/images/armlabelled.png)


  - type: content_card
    title: Cleaning head
    content: >-

      The cleaning head is located at the end of the arm. It includes a sponge, a main flat section with a pressure sensor on the bottom and an appendage which is used to clean and press buttons.

      The sponge is used to clean the tables by applying a cleaning solution as the arm wipes. The pressure sensor is used for feedback so the controller can check that the robot is applying enough pressure on the table to clean effectively and can adjust the position of the arm accordingly. The flat shape of the head allows rubbish to be pushed towards the bin. The ‘wings’ on either side of the head are used to prevent rubbish being pushed out of the way, instead guiding it into the middle of the head so that it ends up in the bin.

      ![](/images/headlabel.png)


  - type: content_card
    title: Robot Base
    content: >-


      Initially our robot was created using the TIAGO base that was already present in webots. This off-the-shelf component allowed us to begin working on the movement and detection functions of the robot immediately. However the base included several components that we didn’t need and was unstable, included too many unecessary components and lacked the ability to turn in a small enough circle.

      Taking inspiration from the Kuka Youbot (a robot already present in Webots) we created a new base that uses mechanum wheels. These allow the robot to move in all directions without rotation by using a unique wheel design. This design change making the cleaning process faster and the robot more efficient as it has to spend less time turning and correcting its position.


      ![](/images/baselabelled.png)


  - type: content_card
    title: Bin
    content: >-


      The main body of the robot is hollow, this allows 0.08m^3 of rubbish to be swept off tables and stored. On the bin side of the robot the body is split in half, the top section is hinged and controlled by a motor. This top section can open to allow access to the bin interior. When the system is in place for wiping a table, the bin opens and accepts rubbish falling in. During normal movement the bin is closed. The interior of the robot contains a sensor, which is used to tell when the bin is full.


      ![](/images/binlabelled.png)


  - type: content_card
    title: Table Detection
    content: >-


      Railly clean has a dedicated set of distance sensors on its sides. As the system moves through the carriage the sensors are constantly scanning perpendicular to the direction of movement. The readings are fed back into the controller. The controller processes these inputs and a certain input means that a table has been detected. Once a table is detected the controller initiates the cleaning function. This will calculate then carry out the correct number of sweeps needed to clean the table.

      ![](/images/tabledetectlabelled.png)


  - type: content_card
    title: Table Wiping
    content: >-


      The robot controller calculates the distance that the arm needs to extend out based on the readings given by the distance sensors on the arm side of the robot. The kinematics function then calculates the movements necessary by the arm to complete a cleaning sweep of that section of the table.

      In the case of unexpected failure during a cleaning sweep the robot will simply tuck the arm back into it’s deactivated position. It will then attempt the next sweep. This added failsafe method makes the system robust and prevents the robot getting stuck during cleaning.

      ![](/images/wipelabelled.png)


  - type: content_card
    title: Valuable Detection
    content: >-

      To make sure that Railly Clean does not clear tables where passengers might have left their valuables behind we have created a valuable detection algorithm. To do this we have trained a model to distingush between cleanable and valuable items and surfaces. We achieved this by using transfer learning and retraining the SOTA EfficientNet model for image classfication. We used Tensorflow to train out model and create a tflite version which is optimized to work on devices with lower computational power like a Raspberry Pi. This means our model can work and give inferences entirely locally without relying on an hosted API making it secure and privacy friendly. By the help of a large dataset of pictures we collected we were successfully able to repurpose the general image classification EfficientNet model to a highly accurate valuable vs cleanable classifer. The accuracy of our classfications is around 99%! Now whenever we detect a table, we first take a picture, which our model classifies as valuable or cleanable. In the case we get a valuable classification we don't clean the table otherwise we continue as normal.


      A demo of this model is available [here](/playground) to explore.

  - type: content_card
    title: Navigation
    content: >-


      Railly clean uses a combination of object recognition and distance sensors to keep itself centred in the carriage. Two distance sensors on the left and right sides of the robot provide feedback about the position relative to the sides of the train. The robot uses an image recognition algorithm on the input from the camera to detect the stickers at either end of the carriage. It can then adjust its rotation relative to these two stickers.



      ![](/images/centerlabelled.png)



  - type: content_card
    title: Collision Avoidance
    content: >-


      Railly clean is a safe robot. The input from the distance sensors is constantly fed into the controller to make sure that the robot isn’t about to collide with anything. In the event of an object being in the way of the robot it uses its camera to distinguish between the end of the carriage (identified using a sticker) and any other object that may be causing an obstruction.


  - type: content_card
    title: Button Detection
    content: >-

      One of the features of the system is cleaning and operating buttons. This is an important feature as the robot navigates the train and moves in and out of carriages.  Railly clean uses image recognition to identify buttons. Once a button has been identified the image from the camera is passed to the controller for vision processing in Python. The position in 2d from the camera is converted to a 3d position relative to the arm. The kinematics controller then calculates the movements required to move the button pressing appendage to the button, and press it.

      ![](/images/buttonlabelled.png)
    
  - type: content_card
    title: Check out our handy user guide
    content: >-

      <iframe src="/pdf/SDP-Group10-User-Guide.pdf" width="100%" height="900"></iframe>
seo:
  title: How It Works
  description: ""
  extra:
    - name: ""
      value: ""
      keyName: name
  type: stackbit_page_meta
layout: advanced
---