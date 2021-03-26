---
title: How It Works
sections:
  - type: content_section
    content: >-
      Railly Clean is an autonomous train cleaning solution. 


      The robot can be moved up a ramp and onto the train. Once in the carriage it will centre itself using the stickers. It moves forward through the carriage, using the distance sensors on the side to detect tables. Upon reaching a table the robot moves into position to begin wiping as well as opening its bin compartment. Before each wipe it assesses whether there are any valuables in the way, if there are then it avoids that section of the table. If there is only rubbish in the way then the robot will wipe the table, using a sponge attached to the end of the arm to clean the table, while pulling rubbish towards it and into it’s integrated bin compartment. Once a table has been cleaned the robot reverts back to the state where it’s looking for tables and finding and cleaning them as it goes. Once it reaches the end of the carriage it will turn around and clean the tables on the other side of the carriage. Once all the tables have been cleaned and the robot has reached the end of the carriage it uses its camera to detect the button and cleans and presses it
    title: Overview
  - type: content_section
    title: The arm
    content: >-
      One of the key components of the robot was the arm, this is the part of
      the robot that underwent the most changes as the project progressed.
      Initially we were going to use a standard arm the \[insert arm name here]
      however it soon proved to be too small and ineffective for the job. 

      The second iteration of the arm was a \[dual/two] section arm that allowed for movement in the middle \[picture of sweeping using this arm]. This arm had problems, principally that it was too large and didn’t tuck down to a small enough size to allow the robot to move through the door of the train.

      After a series of tests the final arm was created \[picture of new arm, and potentially some of the rejects]. This new arm allowed the same sweeping motion as the first one but was a much more flexible design which allowed the arm to tuck into a much smaller footprint \[armprint]. This new arm design proved to be difficult to control, the added joint mean that a dedicated kinematics function had to be created to calculate the position that the arm needs to be in to allow it to carry out a sweeping motion.
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
