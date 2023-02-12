# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line

#Part 1

#Players that scored a Goal
player_goal_0='Ruud Gullit '
player_goal_1='Marco van Basten '

#minutes of scored Goals

goal_0=32
goal_1=54

#Player + scored Goal
scorers= player_goal_0 + str(goal_0), player_goal_1 + str(goal_1) 

print(scorers)

#report variable of scorers in which minute

report = player_goal_0 + " scored in the " + str(goal_0) + "nd minute, \n" + player_goal_1 + " scored in the " + str(goal_1) + "th minute"

print(report)

#part two

player= "Gerard Vanenburg"
end_first_name= player.find(" ")
first_name= player[:(end_first_name)]
print(first_name)

last_name=player[(end_first_name):]
print(last_name)

last_name_len= len(last_name) -1
print(last_name_len)

short= first_name[:1] + "." + last_name
print(short)

first_name_len= len(first_name)
print(first_name_len)
chant= (first_name + "! ") * first_name_len
print(chant)

fixed_chant= ((chant[-1]) !='')
print(fixed_chant)