const inputTask=document.querySelector('.inputTask');
const inputDescription=document.querySelector(' .description')
const btnAdicionar=document.querySelector('.btn-addTask')
const btnMostrarTaks=document.querySelector('.btn-ShowAllTasks')
const btnApagarTodasTasks=document.querySelector('.btn-clearAllTasks')
const semTask=document.querySelector('.sem-task')
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
   
   let task=[]
   const App=()=>{

    const setTaskInLocalStorage=()=>{
        localStorage.setItem('tasks',JSON.stringify(task))
    }
    const mostrarBtnMsgErro=()=>{
        let data=JSON.parse(localStorage.getItem('tasks'))
        if(data===null){
        semTask.style.display="block"
        btnApagarTodasTasks.style.display="none"
        return
        }
        semTask.style.display="none"
        btnApagarTodasTasks.style.display="block"
        return
    }
  
    const getTasksInLocalStorage=async ()=>{
    let data= await JSON.parse(localStorage.getItem('tasks'))
    mostrarBtnMsgErro()

    const createElementEaddLi=(tarefa)=>{
        let buttonRemover=document.createElement('button')
        let li=document.createElement('li')
        let h3=document.createElement('h3')
        let p=document.createElement('p')
        
        buttonRemover.textContent='x'
        buttonRemover.addEventListener('click',()=>li.remove())
        p.className='texto'
        buttonRemover.classList.add('close')
        li.appendChild(buttonRemover)
        li.classList.add('tarefa')
        li.setAttribute('key',`${tarefa.id}`)
        ul.appendChild(li)
        li.append(h3)
        li.appendChild(p)
        h3.textContent=tarefa.task
        p.textContent=tarefa.description

        console.log(li.children)
       }
       if(ul.children){
           data.forEach(createElementEaddLi)
         
       }

    }
    const clearAllTasksInLocalStorage=()=>{
        ul.remove()
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

