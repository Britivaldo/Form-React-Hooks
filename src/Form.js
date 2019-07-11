import React, {useState} from 'react';
import './form.css';

const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
};

let list = [];
export default function Form (){
    const [obj, setObj] = useState(initialState);

    function updateField(event){
        const user = {...obj.user};
        user[event.target.name] = event.target.value;
        setObj({...obj, user});
    }

    function save(){
        const user = obj.user;
        if(list.length < 3){
            list.push(user);
            setObj({user:initialState.user, list});
        }else{
            alert('memoria cheia!');
        }
    }

    function remover(id){
        list.splice(id, 1);
        setObj({...obj, list});
    }

    function renderRows(){
        return obj.list.map((user, id)=>{
            return (
                <div id="list" key={id}>
                    Nome: {user.name}
                    <br/>
                    Email: {user.email}
                    <br/>
                    <button onClick={() => remover(id)}>Excluir</button>
                </div>
            );
        });
        
    }

    return(
        
        <div id="fundo">
            
            <form>
                <div>
                    <div className="input-label">
                        <label>Name:</label><br/>
                        <input type="text" name="name" value={obj.user.name} onChange={e => updateField(e)} placeholder="Digite seu nome..." ></input>   
                    </div>
                    <div className="input-label">
                        <label>Email:</label><br/>
                        <input type="text" name="email" value={obj.user.email} onChange={e => updateField(e)} placeholder="Digite seu email..."></input>   
                    </div>
                </div>
            </form>
            <div className="form-bnt">
                <button className="bnt" onClick={ e => save(e)}>salvar</button>
            </div>
            <label id="title-list">Lista</label>
            {renderRows()}
            
        </div>
    );
}