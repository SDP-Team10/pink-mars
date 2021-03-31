---
title: Evaluation
sections:
  - type: hero_section
    title: System Evaluation
    align: center
  - type: content_card
    title: Whole system specifications
    content: >-
      <table> <thead>
        <tr>
          <th>Specification</th>
          <th>Value</th>
        </tr>
      </thead> <tbody>
        <tr>
          <td>Energy expended to complete a carriage</td>
          <td>60Wh</td>
        </tr>
        <tr>
          <td>Time taken to clean 1mx0.8m table</td>
          <td>2 minutes</td>
        </tr>
        <tr>
          <td>Time taken to detect and push button</td>
          <td>25 seconds</td>
        </tr>
        <tr>
          <td>Maximum slope of ramp travellable</td>
          <td>10°</td>
        </tr>
        <tr>
          <td>Maximum time needed to centre</td>
          <td>1 minute</td>
        </tr>
        <tr>
          <td>Time taken to complete a carriage in Webots</td>
          <td>20 minutes</td>
        </tr>
      </tbody> </table>


      Based on the energy consumption reported by Webots at the end of a whole-carriage system run, a 6000mAh battery (14.4V) would deliver enough power to last a single use even with overhead, and could be easily switched out if short on time or fully recharged in under an hour (especially as the battery will likely not have been depleted).


      The coverage remains at over 95% as in the previous demo and as the head has a disinfectant covered sponge attached, which disinfects the tables.


      The current cleaning mechanism includes a robust feedback loop that allows the arm to recover itself from any position, given the complexity of surfaces and items it will encounter. Our carriage was set up with 6 table seats in total, matching the number expected in a real train carriage. We find the current performance acceptable for use during a deep-clean of the train at night, as the robots can help alleviate the need for many cleaners to deep-clean the trains. For use during the day, more testing and optimisation will be needed to bring the time down to around 10 minutes. The bottleneck was in calculating joint values using kinematics, which can be improved with more accurate calculations of optimal PID values to scale subsequent wipe actions after the first one in the carriage. We also note that time-sensitive performance recorded by Webots may not reflect real world application.


      We expect the robot will work on 3 buttons throughout a carriage, one to open the door to get into the carriage, and one at either end of the carriage. With the ability to manipulate the buttons, the robot can travel on and off the carriage by itself without requiring a cleaner’s assistance; thus the 75 seconds expected to open and close doors can be considered a significant improvement from the time and risks involved in having the cleaner guide the robot on and off carriage, as well as enabling the cleaner to streamline the process of setting up accessible ramps and powering on the robots. The cleaner can then focus on clearing rubbish and picking up valuables left behind. We also note that if the robot is able to push the button and pass through the door to get into the carriage, it will likely be already close to centred in the aisle and won’t require the maximum 1 minute for centering before cleaning.


      Given the robot’s tested ability to move up and down slopes up to 10° steep, exceeding [the standardised maximum gradient of 1:12](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/918425/design-standards-accessible-stations.pdf), the ability to autonomously navigate into the carriage can be developed and tested in the future using the existing implementation for button detection and aisle movement.
  - type: content_card
    title: Clearing Rubbish from Table
    content: >-
      <table> <thead>
        <tr>
          <th>Total</th>
          <th>Side</th>
          <th>Average Succeses</th>
        </tr>
      </thead> <tbody>
        <tr>
          <td>1</td>
          <td>Left</td>
          <td>1</td
        </tr>
        <tr>
          <td>1</td>
          <td>Right</td>
          <td>1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Left</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Right</td>
          <td>2</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Left</td>
          <td>3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Right</td>
          <td>2</td>
        </tr>
      </tbody> </table>


      We tested the robot’s ability to pull the rubbish into the bin body with the assumption that for each pair of passengers at either side of the table seat, there would be about 1-3 items left behind. We note that the robot is expected to behave with a bin bag inserted, which not only keeps the bin compartment clean but also prevents items from falling out of the bin. We also note that Webots has known bugs with cylindrical objects, related to which we have observed that items would fall straight through the door or the base even though that is not expected to happen in the real world. Therefore, we consider an item successfully cleared into bin if it falls down onto the opened door, since it will slide down the bin bag into the bin.


      We observe that the robot’s sweeping mechanism performed well not just in terms of table coverage but also in terms of expected performance in clearing rubbish. This is expected as long as the robot is able to record accurate distances to wall, and the tables are aligned well with the chairs (as is the case in real train environments), so it can utilise the sideways movement of the mecanum wheels to move close enough to the table to open its bin the right amount.
  - type: content_card
    title: Button Manipulation
    content: >-
      <table> <thead>
        <tr>
          <th>Distance from Wall (m)</th>
          <th>Success Rate</th>
        </tr>
      </thead> <tbody>
        <tr>
          <td>1.0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>1.1</td>
          <td>4/6</td>
        </tr>
        <tr>
          <td>1.2</td>
          <td>6/6</td>
        </tr>
        <tr>
          <td>1.3</td>
          <td>5/6</td>
        </tr>
        <tr>
          <td>1.4</td>
          <td>0</td>
        </tr>
      </tbody> </table>


      We note the robot’s ability to recognise buttons located 1.25m above ground, and make the necessary adjustments to move forward to push from different distances. This information is useful for knowing when the robot should stop to check for a button, rather than a quantitative analysis about the robot’s ability to detect button and push.


      Due to the lack of time for development, we were not able to develop button manipulation to the extent that we wanted. In particular, we recognise that its inability to work with buttons placed between 1.05m and 1.15m from the floor is disadvantageous to real life application. as buttons designed for accessible use are recommended at 1.2m above floor (Department for Transport, 2015). Seeing as the robot was able to recognise and push buttons 1.25m from the floor, with further testing, we can improve the arm’s mechanism for pushing buttons to also cover the expected 1.2m height.


      We recognise that this is not a hardware limitation, as the arm has been shown to work effectively with tables that are 1-1.1m above ground. Our main source of problem was with precisely computing the location of the button relative to the arm for our kinematics computations. The algorithm will perform better when given a high-resolution template of the button the robot needs to work with.
  - type: content_card
    title: Rotation Fixing and Aisle Centering
    content: >-
      <table> <thead>
        <tr>
          <th>Displacement (m)</th>
          <th>Rotation (°)</th>
          <th>Time (s)</th>
        </tr>
      </thead> <tbody>
        <tr>
          <td>-0.6</td>
          <td>60</td>
          <td>40.9</td>
        </tr>
        <tr>
          <td>-0.6</td>
          <td>30</td>
          <td>8.2</td>
        </tr>
        <tr>
          <td>-0.3</td>
          <td>60</td>
          <td>6.5</td>
        </tr>
        <tr>
          <td>0.3</td>
          <td>30</td>
          <td>4.4</td>
        </tr>
        <tr>
          <td>0.3</td>
          <td>-30</td>
          <td>4.7</td>
        </tr>
        <tr>
          <td>0.3</td>
          <td>-60</td>
          <td>34.8</td>
        </tr>
        <tr>
          <td>0.6</td>
          <td>-30</td>
          <td>7.4</td>
        </tr>
        <tr>
          <td>0.6</td>
          <td>-60</td>
          <td>7.9</td>
        </tr>
      </tbody> </table>


      When the sticker was in the field of view of the front cam- era, the robot would take less than 10s to centre itself before cleaning. If the robot started out unable to see the sticker (facing the wrong direction), it would need to complete up to a rotation to find the sticker, then fix its rotation and position, needing up to a minute before it could start cleaning the carriage. 


      Centering is used to align the robot through- out the carriage, and testing has shown that after cleaning, the robot managed to centre itself before reaching the next table, therefore allowing the robot to more accurately judge the distance to wall when computing joint values of the arm. Assuming LNER’s London-Edinburgh route, a minute added to ensure the robot would centre itself would still allow the robot to clean 4 table seats in a carriage in 10 minutes, yet improving the robot’s autonomy in the absence of a human to properly position it before cleaning
  - type: content_card
    title: Valuable Classifier
    content: >-
      <table> <thead>
        <tr>
          <th>Training Accuracy (%)</th>
          <th>Validation Accuracy (%)</th>
        </tr>
      </thead> <tbody>
        <tr>
          <td>81.43</td>
          <td>98.83</td>
        </tr>
        <tr>
          <td>98.76</td>
          <td>99.61</td>
        </tr>
        <tr>
          <td>99.21</td>
          <td>99.61</td>
        </tr>
        <tr>
          <td>99.11</td>
          <td>99.61</td>
        </tr>
        <tr>
          <td>99.47</td>
          <td>99.61</td>
        </tr>
      </tbody> </table>


      **Testing accuracy (%) : 99.62**


      We were able to verify that the classifier could run on Rasp- bery PI 3, which we plan to use on our marketed robot. We have confidence the classifier would perform well in the real world given the diverse nature of images used in training and evaluating, and as it successfully identified valuables on random images not from the data set. The clas- sifier works on 2 labels, ‘valuable’ and ‘cleanable’, which are all the robot needs to decide to sweep a section of the table. The inference speed of one image expected of our specific model on Raspberry PI 3 is 639μs.
  - type: content_card
    title: Whole Table Coverage for Different Lengths
    content: >-
      <table> <thead>
        <tr>
          <th>Table Length from Wall</th>
          <th>Sweep Coverage (%)</th>
        </tr>
      </thead> <tbody>
        <tr>
          <td>0.5</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0.6</td>
          <td>71</td>
        </tr>
        <tr>
          <td>0.7</td>
          <td>96</td>
        </tr>
        <tr>
          <td>0.8</td>
          <td>96</td>
        </tr>
        <tr>
          <td>1.0</td>
          <td>95</td>
        </tr>
        <tr>
          <td>1.1</td>
          <td>95</td>
        </tr>
        <tr>
          <td>1.4</td>
          <td>87</td>
        </tr>
      </tbody> </table>


      Given the arm dimensions mentioned above, we conclude that the arm satisfactorily consistently sweeps 90% or more for table lengths between 0.7m and 1.1m (inclusive), within the expected range for train tables. A single sweep from wall to the edge of a 1.1m long table takes 28.5s, and the robot spends on average 2 minutes at the table, from opening bin at one end to closing bin at another. Assuming LNER’s current route from London to Edinburgh which uses Azuma trains with 4 table seats per carriage, the robot can theoretically clear rubbish and clean tables in the 10 minutes the route stops at Newcastle. We have noticed that spherical trash like fruits could be difficult to accurately sweep due to their lack of contact surface with the table. It is worth noting however that half-eaten fruits would lose the spherical shape and behave more like cans of drink.
seo:
  type: stackbit_page_meta
  title: System Evaluation
  description: This is the evaluation page
layout: advanced
---
