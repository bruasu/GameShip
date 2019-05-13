const bulletsType = {
    simple_bullet : 0,
    rounded_bullet : 1,
}
const bulletsTypeColors = {
    red : "red",
    green : "green",
    yellow : "yellow",
    blue : 'blue',
}
//El primer array de cada una es el width y el height (recortado del bitmap)
const bulletsTypesImgs = {
    simple_bullet_red : [[20,20],[274,0],[248, 0],[228,0],[208,0]],
    simple_bullet_green : [[20,20],[274,25],[248, 25],[228,25],[208,25]],
    simple_bullet_yellow : [[20,20],[274,45],[248, 45],[228,45],[208,45]],
    simple_bullet_blue : [[20,20],[274,65],[248,65],[228,65],[210,65]],
    rounded_bullet_green : [[14,14],[128,94],[112,94],[97,94],[82,94],[68,94],[56,94],[45,94],[35,94],[26,94],[16,94],[10,94]],
    rounded_bullet_yellow : [[14,14],[128,114],[112,114],[97,114],[82,114],[68,114],[56,114],[45,114],[35,114],[26,114],[16,114],[10,114]],
    rounded_bullet_red : [[14,14],[128,133],[112,133],[97,133],[82,133],[68,133],[56,133],[45,133],[35,133],[26,133],[16,133],[10,133]],
    rounded_bullet_blue : [[14,14],[128,152],[112,152],[97,152],[82,152],[68,152],[56,152],[45,152],[35,152],[26,152],[16,152],[10,152]],
}