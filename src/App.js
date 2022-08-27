const inputTask=document.querySelector('.inputTask');
const inputDescription=document.querySelector(' .description')
const btnAdicionar=document.querySelector('.btn-addTask')
const btnMostrarTaks=document.querySelector('.btn-ShowAllTasks')
const btnApagarTodasTasks=document.querySelector('.btn-clearAllTasks')
//const btnApagarUmaTask=document.querySelector('')
const ul=document.querySelector('.ontaskList')

const Task=class{
    constructor(task,description){
        this.description=description;
        this.task=task;
        this.id=this.randomID()
    }
    randomID(){
        let str=this.task.split()
        let number=(Math.random(1,100)*13).toFixed(2)
        let newID=`${number}${str[0]}`
        return newID
    }
}

/*
 {id:1,task:'aprender javascrip',description:'lorem vgvgvfhgjkhgfyhyhgk yufyugfgf'},
    {id:2,task:'local storage',description:'lorem vgvgvfhgjkhgfyhyhgk yufyugfgf'},
    */
   
   const task=[
      
   ]
const App=()=>{
    const setTaskInLocalStorage=()=>{
        localStorage.setItem('tasks',JSON.stringify(task))
    }
    const apagarUmaTask=(id)=>{
        
    }
    const getTasksInLocalStorage=()=>{
       const data=JSON.parse(localStorage.getItem('tasks'))
    if(data===null){
        console.log('sem tarefas, Adiciona as tarefas')
        return
    }
        data.forEach((tarefa)=>{
                let li=document.createElement('li')
                let h3=document.createElement('h3')
                let h4=document.createElement('h4')
                li.classList.add('tarefa')
                li.setAttribute('key',`${tarefa.id}`)
                ul.appendChild(li)
                li.append(h3)
                li.appendChild(h4)
                console.log(li)
                h3.textContent=tarefa.task
                h4.textContent=tarefa.description
               /* li.innerHTML=`<h3>${tarefa.task}</h3>
                <h4>${tarefa.description}</h4>
                `*/
               })
    }
    const clearAllTasksInLocalStorage=()=>{
        localStorage.clear('tasks')
        
    }
    const autoApagarInputValue=()=>{
        setTimeout(()=>{
            inputTask.value='';
            inputDescription.value=''
        },1000)
    }
    const autoFocusInputs=()=>{
        inputTask.focus();
        inputDescription.focus()
    }
    const adicionarTask=()=>{
        if(inputTask.value===''|| inputDescription.value===''){
            autoFocusInputs()
            return
        }
        const task1=new Task(inputTask.value,inputDescription.value)
        task.push(task1)
        setTaskInLocalStorage()
        autoApagarInputValue()
        console.log(task1)
       /*const addElementLi=()=>{
            let li=document.createElement('li')
            li.classList.add('tarefa')
            ul.appendChild(li)
            getTasksInLocalStorage(li)
           
        }*/
    }
    btnApagarTodasTasks.addEventListener('click',clearAllTasksInLocalStorage)
    btnAdicionar.addEventListener('click',adicionarTask)  
    btnMostrarTaks.addEventListener('click',getTasksInLocalStorage)
    
}

App()


/* task.forEach((task)=>{
                console.log(task.task)
               li.innerHTML=`<h3>${task.task}</h3>
                <h4>${task.description}</h4>
                `;
            }
            )*/

