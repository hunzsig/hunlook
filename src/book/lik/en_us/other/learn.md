## How to learn

### Introductory Method

Be exposed to the new ideas of this framework, or have no experience, or have been exposed to, or skilled in using other technical drawings.

First of all, use this framework, try not to carry preconceived ideas, put the existing ones aside, and re accept this new thing.

In most cases, existing concepts will help you get started with new concepts, but sometimes they can hinder your understanding of new patterns and environments.

### Knowing is not knowing

After reading some of the documents, some Mengxin realized that their technology was not enough to master the framework and knew how to learn on their own. This is a commendable behavior! For example, you are not familiar with [Lua, find some public tutorials to learn](https://www.runoob.com/lua/lua-tutorial.html), it is very good.

It is worth noting that tutorials also need to be self selected, and should not be learned casually. Try to learn the basics rather than the complex and repetitive ones. For example, this framework is ready to use out of the box. The environment is clean, non-toxic, and harmless. The threshold for entry is extremely low. There is already a fairly complete set of configurations.

At this point, you see a Lua mapping environment setup. Although you may not be able to do so, I don't think you need to study specifically. For most people, you won't be able to use it after learning. Moreover, many of the tutorial tools on the market are of poor quality, including strange operations such as asynchronous unit creation, local test loops, and malicious code. Learning them may also mislead you. If in doubt, ask the original author. If there are any problems found, they can communicate in a timely manner. "I dare not provide you with something that must be correct, but it's best to take a look at what the framework did first. After all, you are looking at this file to learn it.". If you say that you are not a troublemaker at all to learn to use, my suggestion is to close this file and delete everything related, leave well without seeing off, and do not affect people loved by others.

### Things that should not be done

In keyboard and mouse events, execute functions that can only be used in a synchronous environment

* Only use asynchronous execution functions or manual synchronization inside
  
Do not follow the framework structure and use require yourself

* If you can control it, use it casually. If not, please try to self load it
  
Use table and function as keys for another table

* Disable
  
Use table and function as the key of the prop

* Disable
  
Using pairs to traverse a kv type table

* Use Array, ipair, and pairx instead
  
After modifying the project, skip other tests and directly run the -r test

* No one can guarantee that they won't make mistakes, and there's no harm in testing multiple times

### Know how to ask questions

The following methods of asking questions are believed to help you~

![Question](https://gitlab.com/h-document/lik/-/raw/main/assets/question1.png)

![Question](https://gitlab.com/h-document/lik/-/raw/main/assets/question2.png)

### Make good use of tools

After the release of chatGPT, more possibilities emerged. It is not advisable to regard them as floods and beasts, but to use them as tools.

> More tools like: ERNIE Bot, NewBing, Copilot, Cursor, etc. I won't recommend them here, you can learn about them yourself.

For example, I use AI to help translate and modify documents.

![AiTrans1](https://gitlab.com/h-document/lik/-/raw/main/assets/aiTrans1.png)

![AiTrans2](https://gitlab.com/h-document/lik/-/raw/main/assets/aiTrans2.png)

You can also try to use AI to help you understand and optimize code.

![AiSee1](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee1.png)

![AiSee2](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee2.png)

![AiSee3](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee3.png)

You can also try to use AI to help you find bugs in your code.

![AiSee4](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee4.png)

Or just let AI do it for you.

> Instruction: Change the cooldown to 666 seconds, change the name to "Human Extinction", and change the passive trigger condition to when the unit attacks.

![AiDo1](https://gitlab.com/h-document/lik/-/raw/main/assets/aiDo1.png)

> Instruction: Refer to the existing Sword of Courage skill and help me write a similar effect skill called "Human Defense Final Chapter". The original increase in attack power per layer is changed to an increase in defense power of 15 points and movement power of 30 points per layer.

![AiDo2](https://gitlab.com/h-document/lik/-/raw/main/assets/aiDo2.png)

Although AI may not always be accurate and is sure to make mistakes, as long as you learn to distinguish, remove the dross and retain the essence, it will definitely help you a lot.

##### Learning is a science, and sometimes regressing makes progress even more. Everything is dialectical. When faced with a difficult problem that doesn't work, we might as well consider taking a step back and thinking before moving forward. Finally, Zhu Jun, the code fell and the wind and rain startled, and his skill became a sobbing spirit.
