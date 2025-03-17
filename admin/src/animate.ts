/*
 * FileName: animate.js
 * Project: vue-project
 * Author: Gsan
 * File Created: Saturday, 14th December 2024 11:56:45 am
 * Last Modified: Saturday, 14th December 2024 11:56:45 am
 * Modified By: Gsan
 */
export default {
    Animate: [
        {
            label: '无',
            value: '',
            options: [
                {
                    label: '无',
                    value: ''
                }
            ]
        },
        {
            label: '晃动效果',
            value: 'Attention seekers',
            options: [
                {
                    value: 'bounce',
                    label: '弹跳'
                },
                {
                    value: 'flash',
                    label: '闪烁'
                },
                {
                    value: 'pulse',
                    label: '跳动'
                },
                {
                    value: 'rubberBand',
                    label: '橡皮圈'
                },
                {
                    value: 'shakeX',
                    label: '水平晃动'
                },
                {
                    value: 'shakeY',
                    label: '垂直晃动'
                },
                // iOS 弹窗闪烁
                // {
                //   value: 'headShake',
                //   label: '摇头'
                // },
                {
                    value: 'swing',
                    label: '摇摆'
                },
                {
                    value: 'tada',
                    label: ''
                },
                {
                    value: 'wobble',
                    label: ''
                },
                {
                    value: 'jello',
                    label: '果冻'
                },
                {
                    value: 'heartBeat',
                    label: '心跳'
                }
            ]
        },
        {
            label: '弹性缓冲效果',
            value: 'Bouncing Entrances',
            options: [
                {
                    value: 'bounceIn',
                    label: '弹跳进入'
                },
                {
                    value: 'bounceInDown',
                    label: '向下弹跳进入'
                },
                {
                    value: 'bounceInRight',
                    label: '向左弹跳进入'
                },
                {
                    value: 'bounceInUp',
                    label: '向上弹跳进入'
                },
                {
                    value: 'bounceOut',
                    label: '弹跳退出'
                },
                {
                    value: 'bounceOutDown',
                    label: '向下弹跳退出'
                },
                {
                    value: 'bounceOutLeft',
                    label: '向左弹跳退出'
                },
                {
                    value: 'bounceOutRight',
                    label: '向右弹跳退出'
                },
                {
                    value: 'bounceOutUp',
                    label: '向上弹跳退出'
                }
            ]
        },
        {
            label: '弹性缓冲退出',
            value: 'Bouncing Exits',
            options: [
                {
                    value: 'bounceOut',
                    label: '弹跳退出'
                },
                {
                    value: 'bounceOutDown',
                    label: '向下弹跳退出'
                },
                {
                    value: 'bounceOutLeft',
                    label: '向左弹跳退出'
                },
                {
                    value: 'bounceOutRight',
                    label: '向右弹跳退出'
                },
                {
                    value: 'bounceOutUp',
                    label: '向上弹跳退出'
                }
            ]
        },
        {
            label: 'Back entrances',
            value: 'Back entrances',
            options: [
                {
                    value: 'backInDown',
                    label: 'backInDown'
                },
                {
                    value: 'backInLeft',
                    label: 'backInLeft'
                },
                {
                    value: 'backInRight',
                    label: 'backInRight'
                },
                {
                    value: 'backInUp',
                    label: 'backInUp'
                }
            ]
        },
        {
            label: 'Back exits',
            value: 'Back exits',
            options: [
                {
                    value: 'backOutDown',
                    label: 'backOutDown'
                },
                {
                    value: 'backOutLeft',
                    label: 'backOutLeft'
                },
                {
                    value: 'backOutRight',
                    label: 'backOutRight'
                },
                {
                    value: 'backOutUp',
                    label: 'backOutUp'
                }
            ]
        },
        {
            label: 'Fading entrances',
            value: 'Fading entrances',
            options: [
                {
                    value: 'fadeIn',
                    label: '渐显进入'
                },
                {
                    value: 'fadeInDown',
                    label: '向下渐显进入'
                },
                {
                    value: 'fadeInDownBig',
                    label: '由屏幕外向下渐显进入'
                },
                {
                    value: 'fadeInLeft',
                    label: '向右显进入'
                },
                {
                    value: 'fadeInLeftBig',
                    label: '由屏幕外向右渐显进入'
                },
                {
                    value: 'fadeInRight',
                    label: '向左渐显进入'
                },
                {
                    value: 'fadeInRightBig',
                    label: '由屏幕外向左渐显进入'
                },
                {
                    value: 'fadeInUp',
                    label: '向上渐显进入'
                },
                {
                    value: 'fadeInUpBig',
                    label: '由屏幕外向上渐显进入'
                },
                {
                    value: 'fadeInTopLeft',
                    label: 'fadeInTopLeft'
                },
                {
                    value: 'fadeInTopRight',
                    label: 'fadeInTopRight'
                },
                {
                    value: 'fadeInBottomLeft',
                    label: 'fadeInBottomLeft'
                },
                {
                    value: 'fadeInBottomRight',
                    label: 'fadeInBottomRight'
                }
            ]
        },
        {
            label: 'Fading exits',
            value: 'Fading exits',
            options: [
                {
                    value: 'fadeOut',
                    label: '渐隐退出'
                },
                {
                    value: 'fadeOutDown',
                    label: '向下渐隐退出'
                },
                {
                    value: 'fadeOutDownBig',
                    label: '向下渐隐退出屏幕外'
                },
                {
                    value: 'fadeOutLeft',
                    label: '向左渐隐退出'
                },
                {
                    value: 'fadeOutLeftBig',
                    label: '向左渐隐退出屏幕外'
                },
                {
                    value: 'fadeOutRight',
                    label: '向右渐隐退出'
                },
                {
                    value: 'fadeOutRightBig',
                    label: '向右渐隐退出屏幕外'
                },
                {
                    value: 'fadeOutUp',
                    label: '向上渐隐退出'
                },
                {
                    value: 'fadeOutUpBig',
                    label: '向上渐隐退出屏幕外'
                },
                {
                    value: 'fadeOutTopLeft',
                    label: 'fadeOutTopLeft'
                },
                {
                    value: 'fadeOutTopRight',
                    label: 'fadeOutTopRight'
                },
                {
                    value: 'fadeOutBottomLeft',
                    label: 'fadeOutBottomLeft'
                },
                {
                    value: 'fadeOutBottomRight',
                    label: 'fadeOutBottomRight'
                }
            ]
        },
        {
            label: 'Flippers',
            value: 'Flippers',
            options: [
                {
                    value: 'flip',
                    label: '翻动'
                },
                {
                    value: 'flipInX',
                    label: '纵向翻动'
                },
                {
                    value: 'flipInY',
                    label: '横向翻动'
                },
                {
                    value: 'flipOutX',
                    label: '立体纵向翻动'
                },
                {
                    value: 'flipOutY',
                    label: '立体横向翻动'
                }
            ]
        },
        {
            label: 'Lightspeed',
            value: 'Lightspeed',
            options: [
                {
                    value: 'lightSpeedIn',
                    label: '加速进入'
                },
                {
                    value: 'lightSpeedOut',
                    label: '加速退出'
                }
            ]
        },
        {
            label: 'Rotating Entrances',
            value: 'Rotating Entrances',
            options: [
                {
                    value: 'rotateIn',
                    label: '旋转渐显'
                },
                {
                    value: 'rotateInDownLeft',
                    label: '左下角旋转渐显'
                },
                {
                    value: 'rotateInDownRight',
                    label: '旋转渐显'
                },
                {
                    value: 'rotateInUpLeft',
                    label: '左上角旋转渐显'
                },
                {
                    value: 'rotateInUpRight',
                    label: '右上角旋转渐显'
                }
            ]
        },
        {
            label: 'Rotating Exits',
            value: 'Rotating Exits',
            options: [
                {
                    value: 'rotateOut',
                    label: '旋转渐隐'
                },
                {
                    value: 'rotateOutDownLeft',
                    label: '左下角旋转渐隐'
                },
                {
                    value: 'rotateOutDownRight',
                    label: '左下角旋转渐隐'
                },
                {
                    value: 'rotateOutUpLeft',
                    label: '左上角旋转渐隐'
                },
                {
                    value: 'rotateOutUpRight',
                    label: '右上角旋转渐隐'
                }
            ]
        },
        {
            label: 'Sliders',
            value: 'Sliders',
            options: [
                {
                    value: 'slideInDown',
                    label: '向下平移进入'
                },
                {
                    value: 'slideInLeft',
                    label: '向右平移进入'
                },
                {
                    value: 'slideInRight',
                    label: '向左平移进入'
                },
                {
                    value: 'slideOutLeft',
                    label: '向左平移退出'
                },
                {
                    value: 'slideOutRight',
                    label: '向右平移退出'
                },
                {
                    value: 'slideOutUp',
                    label: '向上平移退出'
                }
            ]
        },
        {
            label: 'Specials',
            value: 'Specials',
            options: [
                {
                    value: 'hinge',
                    label: '悬挂'
                },
                {
                    value: 'rollIn',
                    label: '滚动进入'
                },
                {
                    value: 'rollOut',
                    label: '滚动退出'
                }
            ]
        }
    ],
    AnimationTimingFunction: [
        {
            value: 'linear',
            desc: '动画从头到尾的速度是相同的',
            label: '线性过渡'
        },
        {
            value: 'ease',
            desc: '默认。动画以低速开始，然后加快，在结束前变慢',
            label: '平滑过渡'
        },
        {
            value: 'ease-in',
            desc: '动画以低速开始',
            label: '由慢到快'
        },
        {
            value: 'ease-out',
            desc: '动画以低速结束',
            label: '由快到慢'
        },
        {
            value: 'ease-in-out',
            desc: '动画以低速开始和结束',
            label: '由慢到快再到慢'
        }
    ]
}
