Create a basketball court with a moving ball and scoreboard. The court size should be 600x330px.
Image for the court you can find in assets/ folder (court.png). The size of the ball should be 40x40px
(assets/ball.png). By default, the ball position should be at the center of the court. Below the
basketball court should be a scoreboard with the current score of team A and team B. If you click
somewhere on the court the ball goes to that position. There is a basketball backboard with the
hoop on each side of the court. You should establish a scoring zone there (15x15px). If you click on
that zone, should be dispatched a custom event, that handled by notification. The scoreboard
should show a notification message, with the team, that scores that goal and change the current
score. After the 3 seconds, notifications should fade away.

For score notifications you should create a custom event with information about the team, that score
the goal.

## Example 
![image](https://user-images.githubusercontent.com/59802802/180290744-186db5e2-f4b9-4d86-86c0-79285fee9112.png)
