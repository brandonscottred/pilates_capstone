const fs = require('fs');
const path = require('path');

module.exports = [
    { 
      image: "http://localhost:8080/images/pelvic-curl.jpg",
      type: "stability",
      exercise: "Pelvic Curl",
      description: "Pelvic Curl helps to stabilize the pelvis and strengthen the muscles of the lower back, buttocks, and thighs.",
      instructions: "Lie on your back with knees bent and feet flat on the floor. Inhale to prepare, exhale to tilt the pelvis and lift hips off the mat, peel the spine off the mat one vertebra at a time. Inhale to hold at the top, exhale to lower the spine to the mat."
    },
    { 
      image: "http://localhost:8080/images/plank.jpg",
      type: "stability",
      exercise: "Plank",
      description: "The Plank is a core stability exercise that engages multiple muscle groups, including the abdominals, back, and shoulders.",
      instructions: "Start in a push-up position with arms straight and shoulders directly over the wrists. Engage your core muscles to keep your body in a straight line from head to heels. Hold for the desired duration while breathing steadily."
    },
    { 
      image: "http://localhost:8080/images/side-plank.jpg",
      type: "stability",
      exercise: "Side Plank",
      description: "Side Plank targets the obliques and strengthens the muscles on the side of the body while improving stability and balance.",
      instructions: "Lie on your side with legs stacked and elbow directly beneath the shoulder. Lift your hips off the mat, creating a straight line from head to heels. Hold for the desired duration while maintaining proper alignment and breathing."
    },
    { 
      image: "http://localhost:8080/images/single-leg-circle.jpg",
      type: "stability",
      exercise: "Single Leg Circle",
      description: "Single Leg Circle improves pelvic stability and strengthens the core, hip flexors, and outer thighs.",
      instructions: "Lie on your back with one leg extended toward the ceiling and the other leg extended on the mat. Circle the extended leg in a clockwise direction, maintaining stability in the pelvis. Repeat in the opposite direction."
    },
    { 
      image: "http://localhost:8080/images/bridge.jpg",
      type: "stability",
      exercise: "Bridge",
      description: "Bridge strengthens the glutes, hamstrings, and lower back while improving hip stability and mobility.",
      instructions: "Lie on your back with knees bent and feet flat on the floor, hip-width apart. Inhale to prepare, exhale to lift the hips off the mat, pressing into the heels. Inhale to hold at the top, exhale to lower back down."
    },
    { 
      image: "http://localhost:8080/images/saw.jpg",
      type: "rotational",
      exercise: "Saw",
      description: "Saw targets the muscles of the back, shoulders, and hamstrings while improving spinal rotation and flexibility.",
      instructions: "Sit tall with legs extended wider than hip-width apart. Reach arms out to the sides at shoulder height. Twist your torso to one side, reaching the opposite hand toward the pinky toe. Pulse twice, then return to center and repeat on the other side."
    },
    { 
      image: "http://localhost:8080/images/spine-twist.jpg",
      type: "rotational",
      exercise: "Spine Twist",
      description: "Spine Twist stretches the spine and increases rotational mobility while engaging the core muscles.",
      instructions: "Sit tall with legs extended and feet flexed. Reach arms out to the sides at shoulder height. Inhale to prepare, exhale to twist your torso to one side, reach the opposite hand to the foot. Inhale to return to center, exhale to twist to other side."
    },
    { 
      image: "http://localhost:8080/images/corkscrew.jpg",
      type: "rotational",
      exercise: "Corkscrew",
      description: "Corkscrew challenges core stability and spinal articulation while improving coordination and balance.",
      instructions: "Lie on your back with arms by your sides and legs extended toward the ceiling. Lower both legs to one side in a circular motion while keeping the pelvis stable. Reverse the motion to complete the circle in the opposite direction."
    },
    { 
      image: "http://localhost:8080/images/twisting-teaser.jpg",
      type: "rotational",
      exercise: "Twisting Teaser",
      description: "Twisting Teaser combines core strength with spinal rotation, targeting the abdominals and obliques.",
      instructions: "Start in a seated position with knees bent and feet flat on the mat. Lean back slightly to engage the core, then lift one leg and extend it while twisting the torso toward the bent knee. Return to the starting position and repeat on the other side."
    },
    { 
      image: "http://localhost:8080/images/mermaid.jpg",
      type: "rotational",
      exercise: "Mermaid",
      description: "Mermaid increases spinal mobility and stretches the muscles of the side body while promoting balance and coordination.",
      instructions: "Sit on the mat with one leg bent in front and the other leg extended to the side. Reach the arm overhead toward the bent knee and the opposite arm to the side. Inhale to lengthen the spine, exhale to stretch further sideways. Repeat on other side."
    },
    { 
      image: "http://localhost:8080/images/single-leg-kick.jpg",
      type: "strength",
      exercise: "Single Leg Kick",
      description: "Single Leg Kick strengthens the hamstrings, glutes, and lower back while improving lower body coordination.",
      instructions: "Lie on your stomach with forehead resting on your hands and legs extended straight. Bend one knee and kick the heel towards the glutes twice, then switch legs. Continue alternating legs while keeping the torso stable."
    },
    {
      image: "http://localhost:8080/images/double-leg-kick.jpg",
      type: "strength",
      exercise: "Double Leg Kick",
      description: "Double Leg Kick targets the back muscles, hamstrings, and glutes while improving spinal extension and flexibility.",
      instructions: "Lie on your stomach with arms extended overhead and legs straight. Bend both knees and kick the heels towards the glutes twice, then extend the legs and lift the chest off the mat. Reach arms back and hold onto the feet, lower chest back down."
    },
    { 
      image: "http://localhost:8080/images/leg-pull-up.jpg",
      type: "strength",
      exercise: "Leg Pull Up",
      description: "Leg Pull Up strengthens the core, shoulders, and legs while improving overall body control and stability.",
      instructions: "Start in a plank position with hands directly under shoulders and legs extended behind you. Lift one leg towards the ceiling while keeping the hips stable. Lower the leg back down and repeat on the other side."
    },
    { 
      image: "http://localhost:8080/images/hundred.jpg",
      type: "strength",
      exercise: "Hundred",
      description: "Hundred strengthens the abdominals and increases overall core stability and endurance.",
      instructions: "Lie on your back with knees bent in tabletop. Inhale to prepare, exhale to lift your head, neck, and shoulders off the mat while extending your legs to a 45-degree angle. Pump your arms up and down while breathing in for five and out for five."
    },
    { 
      image: "http://localhost:8080/images/leg-pull-front.jpg",
      type: "strength",
      exercise: "Leg Pull Front",
      description: "Leg Pull Front targets the core, shoulders, and legs while improving spinal alignment and shoulder stability.",
      instructions: "Start in a plank position with hands directly under shoulders and legs extended behind you. Lift hips toward the ceiling, forming an inverted V shape. Lower hips back down while maintaining a strong plank position. Repeat the movement with control."
    },
    { 
      image: "http://localhost:8080/images/single-leg-lift.jpg",
      type: "strength",
      exercise: "Side Leg Lift",
      description: "Side Leg Lift strengthens the outer thighs, hips, and glutes while enhancing hip stability and balance.",
      instructions: "Lie on your side with legs stacked and bottom arm supporting your head. Lift the top leg toward the ceiling while keeping the pelvis stable. Lower the leg back down with control. Repeat on the other side."
    },
    { 
      image: "http://localhost:8080/images/swimming.jpg",
      type: "strength",
      exercise: "Swimming",
      description: "Swimming targets the muscles of the back, shoulders, and glutes while improving spinal extension and coordination.",
      instructions: "Lie on your stomach with arms extended overhead and legs straight. Lift your arms, head, chest, and legs off the mat while alternating arms and legs in a fluttering motion. Breathe rhythmically as you continue the movement."
    },
    { 
      image: "http://localhost:8080/images/roll-down.jpg",
      type: "flexibility",
      exercise: "Roll Down",
      description: "Roll Down stretches the spine and hamstrings while promoting spinal articulation and flexibility.",
      instructions: "Stand tall with feet hip-width apart and arms by your sides. Inhale to lengthen the spine, then exhale to tuck the chin and roll down through the spine, reaching fingertips towards the floor. Inhale to stack the spine back up to standing."
    },
    { 
      image: "http://localhost:8080/images/spine-stretch-forward.jpg",
      type: "flexibility",
      exercise: "Spine Stretch Forward",
      description: "Spine Stretch Forward increases hamstring flexibility and stretches the spine while improving posture.",
      instructions: "Sit tall with legs extended wider than hip-width apart. Inhale to lengthen the spine, then exhale to hinge forward from the hips, reaching arms forward towards the feet. Inhale to return to the starting position."
    },
    { 
      image: "http://localhost:8080/images/chest-expansion.jpg",
      type: "flexibility",
      exercise: "Chest Expansion",
      description: "Chest Expansion opens the chest and shoulders while stretching the front of the body and improving posture.",
      instructions: "Sit tall with legs extended and arms reaching behind you, holding a resistance band or straps. Inhale to lengthen the spine, then exhale to pull the arms back, opening the chest. Inhale to return to the starting position."
    },
    { 
      image: "http://localhost:8080/images/leg-pull-back.jpg",
      type: "flexibility",
      exercise: "Leg Pull Back",
      description: "Leg Pull Back stretches the hip flexors and shoulders while strengthening the core and improving spinal alignment.",
      instructions: "Start in a plank position with hands directly under shoulders and legs extended behind you. Lift one leg towards the ceiling while keeping the hips stable. Lower the leg back down and repeat on the other side."
    },
    { 
      image: "http://localhost:8080/images/spine-twist-supine.jpg",
      type: "flexibility",
      exercise: "Spine Twist Supine",
      description: "Spine Twist Supine stretches the spine and improves rotational mobility while engaging the core muscles.",
      instructions: "Lie on your back with arms extended to the sides and legs bent at a 90-degree angle. Inhale to prepare, exhale to lower both legs to one side while keeping the opposite shoulder anchored to mat. Inhale to return to center, exhale to twist to other side."
    },
    { 
      image: "http://localhost:8080/images/swan-dive.jpg",
      type: "rotational",
      exercise: "Swan Dive",
      description: "Swan Dive strengthens the back muscles while improving spinal extension and mobility.",
      instructions: "Lie on your stomach with arms extended overhead and legs straight. Inhale to lift the upper body and legs off the mat, reaching arms forward and legs back. Exhale to lower back down with control."
    },
    { 
      image: "http://localhost:8080/images/twist-and-reach.jpg",
      type: "rotational",
      exercise: "Twist and Reach",
      description: "Twist and Reach increases spinal mobility and stretches the muscles of the back while promoting rotation.",
      instructions: "Sit tall with legs crossed and hands behind the head. Inhale to lengthen the spine, then exhale to twist the torso to one side, reaching the opposite elbow towards the knee. Inhale to return to center, then exhale to twist to the other side."
    },
    { 
      image: "http://localhost:8080/images/open-leg-rocker.jpg",
      type: "rotational",
      exercise: "Open Leg Rocker",
      description: "Open Leg Rocker challenges core stability and spinal mobility while improving balance and coordination.",
      instructions: "Sit tall with legs extended and arms reaching overhead. Inhale to roll back onto your shoulders, lifting the legs towards the ceiling. Exhale to roll back up to balance on the sitting bones, reaching arms forward."
    },
    { 
      image: "http://localhost:8080/images/side-bend.jpg",
      type: "rotational",
      exercise: "Side Bend",
      description: "Side Bend stretches the side body and increases lateral flexibility while engaging the obliques.",
      instructions: "Sit tall with legs extended wider than hip-width apart and arms reaching overhead. Inhale to lengthen the spine, exhale to lean to one side, reach the arm overhead towards the opposite foot. Inhale to return to center, exhale to lean to other side."
    },
    { 
      image: "http://localhost:8080/images/twisting-roll-down.jpg",
      type: "rotational",
      exercise: "Twisting Roll Down",
      description: "Twisting Roll Down stretches the spine and obliques while promoting spinal articulation and rotation.",
      instructions: "Sit with legs extended wider than hip-width and arms reaching forward. Inhale to lengthen, exhale to twist the torso to one side, reaching the opposite hand towards the foot. Roll the spine towards foot, inhale to stack spine. Repeat on other side."
    }
]  
