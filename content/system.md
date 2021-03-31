---
title: System
sections:
  - type: hero_section
    title: Why Railly Clean
    align: center
  - type: content_card
    title: Concept
    content: >-
      Railly Clean clears and disinfects train carriage tables while out of transit to improve sanitation and overall passenger satisfaction on trains.


      During the Covid-19 pandemic, thorough cleaning of key touchpoints on trains has been increased, but we believe high standards of cleaning should be maintained beyond the pandemic. According to Scotrail’s Passenger Satisfaction Remedial Plan of 2019, even pre-pandemic, interior train cleanliness was deemed to be the second most important contributor to overall customer satisfaction. Even so, a National Rail Passenger Survey showed a dramatic decrease in interior cleanliness perceived by commuters from the 2017 to 2018 period. The key suggestion by the committee in order to improve this declining satisfaction, was to improve fleet cleanliness standards within core peak hours of operation. This is where we come in.


      Our robots are a one-time investment, costing only £614.95 each to manufacture. This is equivalent to just 69 hours of minimum wage work. As a Covid-19 Public Attitudes survey have revealed: 32% of Rail Operators have expressed concern that the pandemic will have a lasting effect on passenger numbers. 49% of people from the same survey say that they would rather travel by car than public transport even after restrictions are lifted. With increased focus on hygiene since the pandemic, investing in Railly Clean would provide reassurance to passengers that they will be safe as regular cleaning of carriages will continue post-pandemic, helping operators win back the trust of passengers.


      Railly Cleans wil be present on the platform and board trains at major stops with sufficient waiting times. While the train is stationary and free of passengers, multiple robots will be working efficiently together with a cleaner to clean train carriages just before passengers start to board. A single member of staff is required to place accessible ramps at each carriage, allowing each Railly Clean to navigate into its carriage ready to clean tables. Once Railly clean has finished its run, a cleaner can quickly walk down the carriages picking up minimal leftover rubbish or collecting valuables left by passengers which Railly Clean has intelligently avoided cleaning. 
       
       
       Use cases? Once a train has finished its journeys for the day it needs to be cleaned.
  - type: hero_section_md
    title: Features
    subtitle: A complete set of features to augment your current cleaning solution.
    align: center
  - type: features_section
    features:
      - type: feature
        title: Automate Cleaning
        content: Reduce costs and save time by augmenting your current cleaning team with a Railly Clean robot .
        align: center
        image: images/plus.png
        image_alt: Feature 1 placeholder image
        image_position: right
      - type: feature
        title: Self Navigating
        content:  Able to move around the carriage interior without any assistance.
        align: center
        image: images/nav.png
        image_alt: Feature 1 placeholder image
        image_position: right
      - type: feature
        title: Obstacle Avoidance
        content: An array of sensors prevent any collisions.
        align: center
        image: images/warning.png
        image_alt: Feature 1 placeholder image
        image_position: right
      - type: feature
        title: 98%(!) Table Coverage
        content: Reliable and consistent table cleaning.
        align: center
        image: images/tick.png
        image_alt: Feature 1 placeholder image
        image_position: right
      - type: feature
        title: Rubbish Collection
        content: An integrated bin inside the robot collects rubbish as the robot moves along the carriage.
        align: center
        image: images/bin.png
        image_alt: Feature 1 placeholder image
        image_position: right
      - type: feature
        title: Button Cleaning
        content: Sanitises a key touch point for all passengers.
        align: center
        image: images/sanitise.png
        image_alt: Feature 1 placeholder image
        image_position: right
seo:
  type: stackbit_page_meta
  title: System
  description: This is the features page
  extra:
    - name: og:type
      value: website
      keyName: property
    - name: og:title
      value: Features
      keyName: property
    - name: og:description
      value: This is the features page
      keyName: property
    - name: og:image
      value: images/5.png
      keyName: property
      relativeUrl: true
    - name: twitter:card
      value: summary_large_image
    - name: twitter:title
      value: Features
    - name: twitter:description
      value: This is the features page
    - name: twitter:image
      value: images/5.png
      relativeUrl: true
layout: advanced
---

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>KUKA youBot</title>
    <link type="text/css" href="https://www.cyberbotics.com/jquery-ui/1.11.4/jquery-ui.min.css" rel="stylesheet"/>
    <link type="text/css" href="https://www.cyberbotics.com/wwi/R2021a/wwi.css" rel="stylesheet"/>
    <style>
      html, body {
        padding:0;
        height: 100%;
      }
      #view3d {
        height: calc(100% - 250px);
        width: 100%;
      }
    </style>
    <script src="https://www.cyberbotics.com/jquery/1.11.3/jquery.min.js" ></script>
    <script src="https://www.cyberbotics.com/jquery-ui/1.11.4/jquery-ui.min.js"></script>
    <script src="https://www.cyberbotics.com/jquery-dialogextend/2.0.4/jquery.dialogextend.min.js"></script>
    <script src="https://www.cyberbotics.com/ace/1.2.0/ace.js"></script>
    <script src="https://www.cyberbotics.com/wwi/R2021a/webots.min.js"></script>
    <script>
      function init() {
          var view = new webots.View(document.getElementById("view3d"));
          view.open("../static/sim/youbot.x3d");
          view.setAnimation("../static/sim/youbot.json", "play", true);
      }
      window.addEventListener("load", init, false);
      if (location.protocol == "file:" && (!!window.chrome && !!window.chrome.webstore))
        alert("Webots HTML5 Models and Animations cannot be loaded locally on Google Chrome, as Chrome does not support cross-origin requests using the file:// protocol.");
    </script>
  </head>
  <body>
    <h1>KUKA youBot</h1>
    <div id="view3d"></div>
    <p>Simulation of the KUKA youBot robot.<br/>This model includes an accurate and fast simulation of the Meccanum wheels.<br/>The robot can be equiped with various sensors (including the Microsoft Kinect) and configured with zero, one or two arms.<br/></p>
  </body>
</html>
