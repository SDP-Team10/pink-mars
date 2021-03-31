---
title: Evaluation
sections:
  - type: hero_section
    title: System Evaluation
    align: center
  # - type: content_section
  #   content: >
  #     ![](/images/evolution.png)
  - type: content_card
    title: Whole system specifications
    content: >-

      | Specification                               | Value      |
      |---------------------------------------------|------------|
      | Energy expended to complete a carriage      | 60Wh       |
      | Time taken to clean 1mx0.8m table           | 2 minutes  |
      | Time taken to detect and push button        | 25 seconds |
      | Maximum slope of ramp travellable           | 10°        |
      | Maximum time needed to centre               | 1 minute   |
      | Time taken to complete a carriage in Webots | 20 minutes |

      Based on the energy consumption reported by Webots at the end of a whole-carriage system run, a 6000mAh battery (14.4V) would deliver enough power to last a single use even with overhead, and could be easily switched out if short on time or fully recharged in under an hour (especially as the battery will likely not have been depleted).

      The coverage remains at over 95% as in the previous demo and as the head has a disinfectant covered sponge attached, which disinfects the tables.

      The current cleaning mechanism includes a robust feedback loop that allows the arm to recover itself from any position, given the complexity of surfaces and items it will encounter. Our carriage was set up with 6 table seats in total, matching the number expected in a real train carriage. We find the current performance acceptable for use during a deep-clean of the train at night, as the robots can help alleviate the need for many cleaners to deep-clean the trains. For use during the day, more testing and optimisation will be needed to bring the time down to around 10 minutes. The bottleneck was in calculating joint values using kinematics, which can be improved with more accurate calculations of optimal PID values to scale subsequent wipe actions after the first one in the carriage. We also note that time-sensitive performance recorded by Webots may not reflect real world application.

      We expect the robot will work on 3 buttons throughout a carriage, one to open the door to get into the carriage, and one at either end of the carriage. With the ability to manipulate the buttons, the robot can travel on and off the carriage by itself without requiring a cleaner’s assistance; thus the 75 seconds expected to open and close doors can be considered a significant improvement from the time and risks involved in having the cleaner guide the robot on and off carriage, as well as enabling the cleaner to streamline the process of setting up accessible ramps and powering on the robots. The cleaner can then focus on clearing rubbish and picking up valuables left behind. We also note that if the robot is able to push the button and pass through the door to get into the carriage, it will likely be already close to centred in the aisle and won’t require the maximum 1 minute for centering before cleaning.

      Given the robot’s tested ability to move up and down slopes up to 10° steep, exceeding [the standardised maximum gradient of 1:12](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/918425/design-standards-accessible-stations.pdf), the ability to autonomously navigate into the carriage can be developed and tested in the future using the existing implementation for button detection and aisle movement.

seo:
  type: stackbit_page_meta
  title: Privacy and Terms
  description: This is the evaluation page
layout: advanced
---