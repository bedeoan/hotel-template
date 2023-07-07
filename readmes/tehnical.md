## use node 16.16 for frontend and 14.13 for backend
### Dev stages
-decide on ui framework for pickers and stufff, q-select, q-dialog, q-btn
-make dummy sections
-decide on how to handle data fetching
-dinamic contect from api, use env everywhere 
-make it responsive for mobile
-make page more dinamic (animate library)
-Linting, Seo, Performance

## Stack
tailwind + element ui 
!! Note: be carefull on when to use each element because tailwind overrides element ui css.
you can set a param in tailwind.config.js but not ok.

You see problem only when you build project and run it.
    don't use eleemtn ui type="warning" stuf tailiwnd will overrrid !!

## Element ui 
Must use client-only on dialog and some other components
Annoing to use import for each icon element-ui 


## Code structuring decision & convensions
for simplicity:
-complex components should be mobile and desktop separat
-only simple components are made with css breakpoints 
-Never use px for dimensions
-when to use w-1/3 and when when flex / col

## tehnic chalenge - how to
    on the fly crop image and show what part you need

## what have i learned
    green sock examples (animate fade in)

## what have i learned, Sweet tehnical stuff
    use slot for list of elements with fade effect
    tailwind not responsive and not looking the way you planned in some situations be carefull wth text-xs

## Gotchas this project
    bookbutton not working because not enought height in child comp. - (dialog not opening) and parent dosn't not have any element that occupy all screen
    always be carefull with z-index when dealing with buttons
    fetch directly in setup - gives eslint error for await. but if put it into function,can't to direct asignation for variables

## what can be improved in this project
    make css overlay function with adaptable height by the parent and use it everywhere
    a more conventional way of initalizing data in script setup.


