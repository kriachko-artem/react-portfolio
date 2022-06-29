import {gsap} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {Back} from "gsap/gsap-core";


export function animateList(items){
    gsap.fromTo(items,{
            translateY: 20,
            opacity: 0,

        },
        {
            translateY: 0,
            stagger: 0.1,
            opacity: 1,
            duration: 0.6,
        }
    )
}
export const burgerAnimation = {
    open: ()=>{
            gsap.to('.burger .side',{
                top: '50%',
                bottom: '50%',
                duration: 0.2,
                onComplete: ()=>{
                    gsap.to('.burger .side',{
                        opacity: 0,
                        duration: 0
                    });
                    gsap.to('.burger .left',{
                        rotate: -45
                    })
                    gsap.to('.burger .right',{
                        rotate: 45
                    })
                }
            })
        },
    close: ()=>{
        gsap.to('.burger .cross',{
            rotate: 0,
            onComplete: ()=>{
                gsap.to('.burger .side',{
                    opacity: 1,
                    duration: 0
                })
                gsap.to('.burger .top',{
                    top: 0,
                    duration: 0.2,
                })
                gsap.to('.burger .bottom',{
                    top: 'unset',
                    bottom: 0,
                    duration: 0.2,
                })
            }
        })
    }
};

export function changeBackground(){
    const sections = document.querySelectorAll('section');
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window,{
        scrollTo: 'min',
    })
    window.addEventListener('scroll',setBgColor)

    function setBgColor(){
        if(
            (sections[sections.length-1].getBoundingClientRect().top - window.innerHeight/2 < 0)){
            document.documentElement.style
                .setProperty('--main-bg-color', 'black');
            document.documentElement.style
                .setProperty('--main-text-color', 'white');
        } else if (
            (sections[0].getBoundingClientRect().top - window.innerHeight < 0)&&
            (sections[0].getBoundingClientRect().bottom-window.innerHeight/2 > 0)){
            document.documentElement.style
                .setProperty('--main-bg-color', '#ea8823');
            document.documentElement.style
                .setProperty('--main-text-color', 'black');
        } else {
                document.documentElement.style
                    .setProperty('--main-bg-color', 'white');
                document.documentElement.style
                    .setProperty('--main-text-color', 'black');
        }
    }
}
export function showElementsByScroll(elements){
    function move(item){
        if(window.pageYOffset > item.offsetTop*1.2 - window.innerHeight){
            gsap.to(item,{translateY:0,duration:0.3,ease:"power1.inOut"})
        }
    }
    document.querySelectorAll(elements).forEach(item=>{
        move(item)
        window.addEventListener('scroll',()=>{move(item)})

    })
}

export function animateBody(){
    const wrapper = document.querySelector('.wrapper')
    gsap.to(wrapper,{
            opacity:1,
            duration: 1,
            ease: 'power4.in',
        });
}
export function setCursorPosition(){
    window.addEventListener('mousemove',(event)=>{
        const pos = {
            X:event.clientX,
            Y:event.clientY,
        };
        gsap.to('#cursor-point',{
            display: 'block',
            left:pos.X,
            top:pos.Y,
            duration:0,
        })
        gsap.to('#cursor',{
            display: 'block',
            left: pos.X,
            top: pos.Y,
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        })
    })


}

export function setBigCursor(elements){
    document.querySelectorAll(elements).forEach(item=>{
        item.addEventListener('mouseenter',()=>{
                gsap.to('#cursor',{
                    width: 70,
                    height: 70,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1.5,
                })
            }
        )
        item.addEventListener('mouseleave',()=>{
                gsap.to('#cursor',{
                    width: 30,
                    height: 30,
                    ease: "elastic.out(1, 0.3)",
                    duration: 1.5,
                })
            }
        )
    })
}
export function deviceOrientation3D(element){
    const initialOffset = {
        x: 0,
        y: 0,
    };
    window.addEventListener('devicemotion',({rotationRate: {alpha, beta, gamma}})=>{
        initialOffset.x += Math.round(alpha/10);
        initialOffset.y += Math.round(beta/10)
        if ((initialOffset.x > -180 && initialOffset.x < 180)&&
            (initialOffset.y > -90 && initialOffset.y < 90)){
            gsap.to(element,{
                transform: `rotateY(${initialOffset.y/5}deg) rotateX(${-initialOffset.x/5}deg)`,
                duration: 1,
            });
        }
    })
}
export function mouseMoveCard3D(elements){
    const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
    if (!devices.test(navigator.userAgent)){
        let xPositionFromCenter,yPositionFromCenter,transformX,transformY;
        const cards = document.querySelectorAll(elements);
        cards.forEach(item=>{
            function setTransform(event){
                xPositionFromCenter = event.offsetX - item.childNodes[0].offsetWidth/2;
                yPositionFromCenter = event.offsetY - item.childNodes[0].offsetHeight/2;
                transformX = xPositionFromCenter/8;
                transformY = -yPositionFromCenter/12;
                gsap.to(item.childNodes[0],{
                        transform: `rotateY(${transformX}deg) rotateX(${transformY}deg)`,
                        duration: 0.2,
                });
            }
            item.addEventListener('mouseenter',()=>{
                item.childNodes[0].addEventListener('mousemove',setTransform)
            });

            item.addEventListener('mouseleave',()=>{
                item.childNodes[0].removeEventListener('mousemove',setTransform)
                gsap.to(item.childNodes[0],{
                    transform: 'unset',
                    duration: 0.5,
                });
            });
        })
    }
}

export function showTextByLetter(letters){
    gsap.fromTo(letters,{
        opacity: 0,
        translateY: 30,
    },{
        opacity:1,
        translateY: 0,
        stagger: 0.05,
        ease: Back.easeOut.config(1.7),
})}

export function animateBackgroundCircles(circles){
    document.querySelectorAll(circles).forEach(item=>{
        const tl = gsap.timeline({repeat:-1});
        tl.to(item,{
            opacity:0.7,
            translateX: (Math.random()>0.5?1:-1) * 20+'%',
            duration: item.dataset.speed*6,
        })
        tl.to(item,{
            opacity:0,
            duration: item.dataset.speed*7,
                })
        })
}
export function moveCircleByRotation(elements){
    const initialOffset = {
        x: 0,
        y: 0,
    };
    window.addEventListener('devicemotion',({rotationRate: {alpha, beta, gamma}})=>{
        initialOffset.x += Math.round(alpha/10);
        initialOffset.y += Math.round(beta/10)
        if ((initialOffset.x > -180 && initialOffset.x < 180)&&
            (initialOffset.y > -90 && initialOffset.y < 90)){
            document.querySelectorAll(elements).forEach(item=>{
                gsap.to(item,{
                    translateX: initialOffset.y/(item.dataset.speed*2),
                    translateY: initialOffset.x/(item.dataset.speed*2),
                })
            })
        }
    })
}








