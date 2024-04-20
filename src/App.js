import { useState } from 'react';
import './App.css';
import s from './App.module.scss';

function App() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <div className={s.main}>
         <h1 className={s.head}>Hello tailwind</h1>
         <div>
            <input
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button className={s.button}>Login</button>
         </div>
      </div>
   );
}

export default App;
