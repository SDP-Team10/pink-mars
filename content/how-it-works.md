---
title: How It Works
sections:
  - type: content_section
    content: >-
      <center><h1>How does our System Work?</h1></center>


      ![](/images/evolution.png)


      #### Startup


      To get it onto the train the robot can be wheeled up a ramp. Once in the carriage it will centre itself using the stickers. It moves forward through the carriage, using the distance sensors on the side to detect tables. Upon reaching a table the robot moves into position to begin wiping as well as opening its bin compartment. Before each wipe it assesses whether there are any valuables in the way, if there are then it avoids that section of the table. If there is only rubbish in the way then the robot will wipe the table, using a sponge attached to the end of the arm to clean the table, while pulling rubbish towards it and into it’s integrated bin compartment. Once a table has been cleaned the robot reverts back to the state where it’s looking for tables and finding and cleaning them as it goes. Once it reaches the end of the carriage it will turn around and clean the tables on the other side of the carriage. Once all the tables have been cleaned and the robot has reached the end of the carriage it uses its camera to detect the button to operate the door, it then presses and cleans it, exiting the carriage by the door. 


      ![](/images/systemlabel.png "sample title")


      #### The arm


      One of the key components of the robot was the arm, this is the part of the robot that underwent the most changes as the project progressed. Initially we were going to use a standard arm the \[insert arm name here] however it soon proved to be too small and ineffective for the job. 

      The second iteration of the arm was a \[dual/two] section arm that allowed for movement in the middle \[picture of sweeping using this arm]. This arm had problems, principally that it was too large and didn’t tuck down to a small enough size to allow the robot to move through the door of the train.

      After a series of tests the final arm was created \[picture of new arm, and potentially some of the rejects]. This new arm allowed the same sweeping motion as the first one but was a much more flexible design which allowed the arm to tuck into a much smaller footprint \[armprint]. 


      This new arm design proved to be difficult to control, the added joint mean that a dedicated kinematics function had to be created to calculate the position that the arm needs to be in to allow it to carry out a sweeping motion. Despite this initial setback the arm now has a smooth and consistent sweeping motion.


      ![](/images/armlabelled.png)




      #### Cleaning head


      The cleaning head is located at the end of the arm, it is comprised of a sponge and main section which is used to clean the tables as well as an appendage which is used to clean and press buttons.

      The ‘wings’ on either side of the head are used to prevent rubbish being pushed out of the way, instead guiding it into the middle of the head so that it ends up in the bin. The pressure sensor is used for feedback so the controller knows that the robot is applying enough pressure to the table to clean effectively. The middle section also contains space for a sponge head that will be added to the physical product to allow the robot to clean.


      ![](/images/headlabel.png)


      #### Robot base


      Initially our robot was created using the TIAGO base that was already present in webots. This off-the-shelf component allowed us to begin working on the movement and detection functions of the robot immediately. However the base included several components that we didn’t need and had several flaws such as instability and lacked the ability to turn in a small enough circle. 

      Taking inspiration from the Kuka Youbot (a robot already present in Webots) we created a new base that uses mechanum wheels. These allow the robot to move in all directions without rotation, making the cleaning process faster and the robot more efficient as it has to spend less time turning and correcting its position.


      ![](/images/baselabelled.png)


      #### Bin


      The main body of the robot is hollow, this allowing  0.08m^3 \[remove] of rubbish collected from the tables to be stored in it. On the bin side of the robot the body is split in half, the top section is hinged and controlled by a motor. When the system is in place for wiping the table, the bin opens and accepts rubbish falling in. Between tables the bin is closed. The interior of the robot contains a sensor, which is used to tell when the bin is full. \[what do we do?]


      ![](/images/binlabelled.png)


      #### Table detection


      Railly clean has a dedicated set of distance sensors on its sides. As the system moves through the carriage the sensors are constantly scanning perpeddicaulr to the direction of movement. The readings are fed back into the controller. The controller processes these inputs \[?] and a certain input means that a table has been detected.


      ![](/images/tabledetectlabelled.png)


      #### Table Wiping


      The robot controller calculates the distance that the arm needs to move and wipe out based on the readings given by the distance sensors on the side of the robot. The kinematics function then works out the movements necessary by the arm

      In the case of unexpected failure the robot will simply tuck the arm back into it’s deactived position, making the system robust and preventing the robot getting stuck during cleaning. 

      +include about the


      \[picture of table wiping]


      #### Valuable Detection


      \[get Apurv to write this as he’s the expert]


      #### Navigation


      The robot centres itself using an array of sensors as well as stickers at each end of the carriage. If, during the normal operation on the train the robot ends up not being centred in the aisle then it uses the camera to find the sticker at the other end of the carriage and centres itself relative to that.


      \[ask Suhas to do this]?


      #### Collision avoidance


      Railly clean is a safe robot. The input from the distance sensors is constantly fed into the controller to make sure that the robot isn’t about to collide with anuything. In the event of an object being in the way of the robot it uses its camera to distinguish between the end of the carriage (identified using a sticker) and any other object that may be causing an obstruction.


      #### Button detection


      One of the features of the system is cleaning buttons. When the system has completed the cleaning of a carriage it will clean the buttons used to open the door \[maybe – check here]
    title: ""
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
