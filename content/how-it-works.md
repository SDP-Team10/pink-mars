---
title: How It Works
sections:
  - type: hero_section
    align: center
    has_background: true
    background:
      background_color: gray
      background_image: images/evolution.png
      background_image_opacity: 45
      background_image_size: cover
      background_image_repeat: repeat
    title: How it Works
    subtitle: An explanation of our product

  - type: content_card
    title: Startup
    content: >-

      <h3>Physical setup</h3>

      The robot needs to travel up and down a ramp to get on and off the train. Once in the carriage, it will centre itself using the included stickers placed on doors.


      <center><img src="/images/yellow_sticker.png" /></center>


      As it goes down the aisle, the left distance sensor is used to detect the presence of a table. Upon reaching a table, the robot moves into position to begin wiping as well as opening its bin compartment. It first assesses whether there are any valuables in the way before wiping, and avoids cleaning the section if so. If it deems the section clear of valuables, the robot will wipe with a sponge attached to the end of the arm to clean the table, while pulling rubbish towards it and into the integrated bin. Once a table has been cleaned, the robot reverts back to detecting tables, finding and cleaning them as it goes, as well as turning around at the end of carriage around to clean the other side of the carriage. Once all the tables have been cleaned and the robot has reached the door it came in through, the front camera is used to detect the button to operate the door, cleaning it before pressing it to exit the carriage.

      <h3>App Setup</h3>

      Railly Clean will work directly out of the box.
      A mobile app is also provided to allow our customers to enter in certain setup parameters to customise and optimise Railly Clean to different trains, right on your smartphones.

      Please ensure that your smartphone has Bluetooth enabled and is connected to the Internet—this allows us to bring Railly Clean important updates!

      Once you have installed and opened the app, you will see a page to enter in different parameters.
      The guide provides you an overview on how to set up the parameters.

      Select the model number of the robot UUID picked up by the phone’s Bluetooth connection.

      Please fill in <tt>Table Height</tt>, <tt>Aisle Width</tt> and <tt>Pole Width</tt> to optimise the robot’s performance.

      Tap <tt>Confirm Configurations</tt> to finish the process. Clicking this button will transfer the environment setup data to the robot.


      <center><img src="/images/app.png" /></center>


  - type: content_card
    title: The Arm
    content: >-

      One of the key components of the robot is the arm: this part of the robot underwent the most changes as the project progressed. Initially the design planned to use a pre-made arm (the Pincher X 100 Robotic Arm). However, its small size was rather ineffective for the job. The second iteration of the arm was a two-section arm that allowed for movement in the middle joint. While it worked well for wiping tables, the arm principally was too large and didn’t tuck down to a small enough size for moving through the carriage's door.


      ![](/images/2secsweep.png)


      This new arm allows the same sweeping motion as the initial design but is much more flexible, allowing the arm to tuck into a smaller volume when not in use. The final design initially proved difficult to control; the additional joint required creating a new dedicated kinematics function to calculate the position and force the motors need to carry out the sweeping motion. Despite this initial setback, the arm now has a smooth and consistent sweeping motion which cleans the table and pushes rubbish into its bin.


      ![](/images/armlabelled.png)


  - type: content_card
    title: Cleaning head
    content: >-

      The cleaning head is located at the end of the arm. It includes a sponge, a main flat section with a pressure sensor on the bottom and an appendage which is used to clean and press buttons. The sponge is used to clean the tables by applying a cleaning solution as the arm wipes. The pressure sensor is used for feedback, so the controller can check that the robot is applying enough pressure on the table to clean effectively and can adjust the position of the arm accordingly. The flat shape of the head allows rubbish to be pushed towards the bin. The ‘wings’ on either side of the head are used to prevent rubbish from being pushed out of the way, guiding it instead into the middle of the head so it ends up in the bin.


      ![](/images/headlabel.png)


  - type: content_card
    title: Robot Base
    content: >-


      Initially our robot was created using the TIAGo Base included with Webots. This off-the-shelf component allowed us to begin working on the movement and detection functions of the robot immediately. However the base included several components that we didn’t need and was unstable, lacking the ability to turn nicely in a confined area. Taking inspiration from the KUKA youBot (also included with Webots), we created a new base that uses omnidirectional mecanum wheels. These wheels' unique design allows the robot to move in all four directions without rotating. This design change not only makes the cleaning process faster, but also makes the robot more efficient with less time spent on turning and correcting its position.


      ![](/images/baselabelled.png)


  - type: content_card
    title: Bin
    content: >-


      The main body of the robot is hollow, allowing 0.08<sup>3</sup> of rubbish swept off tables to be stored in a bin bag put in the compartment by the cleaner. On the bin side of the robot, the body is split in half: the top section is hinged and controlled by a motor, allowing access to the bin interior, while the bottom section houses the side distance sensor used for detecting tables. When the system is in place for wiping a table, the bin opens outward for rubbish to fall in. During normal movement the bin is closed. Inside the bin, a ceiling sensor is used to determine the rubbish collection level.


      ![](/images/binlabelled.png)


  - type: content_card
    title: Table Detection
    content: >-


      Railly Clean has a dedicated set of distance sensors on its sides. As the system moves through the carriage, the sensors are constantly scanning perpendicular to the direction of movement. The readings are fed back into the controller. The controller detects a table when a set of successive readings match the pattern for a train table, indicating that the robot just moved from a seat to empty space to the table pole. The robot then has to move back to the edge of table and starts the cleaning process, in which the robot computes and carries out as many sweeps as needed at the table.


      ![](/images/tabledetectlabelled.png)


  - type: content_card
    title: Table Wiping
    content: >-


      The robot controller calculates the distance that the arm needs to extend out based on the readings of the left distance sensor. The kinematics function then calculates the joint positions necessary to complete a cleaning sweep of that section of the table. In the case of unexpected failure during a sweep, the robot will simply tuck the arm back into its deactivated position, and then attempt the next sweep. This added fail-safe mechanism improves the system robustness by preventing the robot from getting stuck during its run.


      ![](/images/wipelabelled.png)


  - type: content_card
    title: Valuable Detection
    content: >-

      To make sure that Railly Clean does not clear tables where passengers might have left their valuables behind, we have created a valuable detection algorithm. To do this we have trained a classification model to distinguish between cleanable and valuable items and surfaces. We achieved this by using transfer learning and retraining the SOTA EfficientNet model for image classification. We used Tensorflow to train out model and create a tflite version which is optimized to work on devices with lower computational power like a Raspberry Pi. This means our model can work and give inferences entirely locally without relying on an hosted API making it secure and privacy friendly. By the help of a large dataset of pictures we collected, we were successfully able to repurpose the general image classification EfficientNet model to a highly accurate valuable vs cleanable classifier. The accuracy of our classifications is around 99%! Now whenever we detect a table, we first take a picture, which our model classifies as valuable or cleanable. The robot will skip to the next section of the table upon classifying an object as valuable.


      <center>A demo of this model is available <a href="/playground">here</a> to explore.</center>


  - type: content_card
    title: Navigation
    content: >-


      Railly Clean uses a combination of object recognition and side distance sensors to keep itself centred in the aisle. Two distance sensors on the left and right side of the robot, pointing at the walls, provide feedback about the position relative to the sides of the train. The robot uses an image recognition algorithm on the input from the camera to detect the sticker at either end of the carriage, adjusting its rotation relative to the location of the sticker.


      ![](/images/centerlabelled.png)



  - type: content_card
    title: Collision Avoidance
    content: >-


      Railly clean was built with safety in mind. Inputs from the distance sensors are continually fed into the controller to make sure that the robot isn’t about to collide with anything. In the event of an object being in the way of the robot, it uses its camera to distinguish between the end of the carriage (identified by the included sticker) and any other object that may be cause an obstruction.


  - type: content_card
    title: Button Detection
    content: >-

      One of the features of the system is cleaning and operating buttons. This is an important feature as the robot navigates the train and moves in and out of carriages autonomously. Railly Clean uses image recognition to identify buttons. Once a button has been identified, the image from the camera is passed to the controller for vision processing in Python. The position in 2D from the camera is converted to a 3D position relative to the arm. The kinematics controller then calculates the movements required to move the button pressing appendage to the button, before prompting the robot to press.


      ![](/images/buttonlabelled.png)


  - type: content_card
    title: Check out our handy user guide
    content: >-

      <iframe src="/pdf/SDP-Group10-User-Guide.pdf" width="100%" height="780"></iframe>
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
