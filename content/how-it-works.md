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

      ####Startup
      To get it onto the train the robot can be wheeled up a ramp. Once in the carriage it will centre itself using the stickers. It moves forward through the carriage, using the distance sensors on the side to detect tables. Upon reaching a table the robot moves into position to begin wiping as well as opening its bin compartment. Before each wipe it assesses whether there are any valuables in the way, if there are then it avoids that section of the table. If there is only rubbish in the way then the robot will wipe the table, using a sponge attached to the end of the arm to clean the table, while pulling rubbish towards it and into it’s integrated bin compartment. Once a table has been cleaned the robot reverts back to the state where it’s looking for tables and finding and cleaning them as it goes. Once it reaches the end of the carriage it will turn around and clean the tables on the other side of the carriage. Once all the tables have been cleaned and the robot has reached the end of the carriage it uses its camera to detect the button to operate the door, it then presses and cleans it, exiting the carriage by the door.


      ![](/images/robotlabelled.png "sample title")

  - type: content_card
    title: The Arm
    content: >-


      One of the key components of the robot was the arm, this part of the robot underwent the most changes as the project progressed. Initially the design planned to use a pre-made arm (the Pincher X 100 Robotic Arm) however it soon proved to be too small and therefore would be ineffective for the job.

      The second iteration of the arm was a two section arm that allowed for movement in the middle. Despite being able to wipe tables this arm had problems, principally that it was too large and didn’t tuck down to a small enough size to allow the robot to move through the door of the train.

      <ims src="/images/2secsweep.png" width="50%"/>
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

      \[get Apurv to write this as he’s the expert]

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

      One of the features of the system is cleaning buttons. When the system has completed the cleaning of a carriage it will clean the buttons used to open the door \[maybe – check here]
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
