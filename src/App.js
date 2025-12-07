import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState('');
  
  const [text, setText] = useState('');
  const [textMsg, setTextMsg] = useState('');
  const [texts, setTexts] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginMsg('Completa ambos campos');
      return;
    }
    setLoginMsg(`Login para: ${email}`);
  };

  const handleText = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setTextMsg('Escribe algo');
      return;
    }
    setTexts([{id: Date.now(), text, date: new Date().toLocaleString()}, ...texts]);
    setTextMsg('Texto guardado');
    setText('');
  };

  return (
    <div>
      <h1>Prueba 2</h1>
      
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
          <button type="submit">Login</button>
          {loginMsg && <p>{loginMsg}</p>}
        </form>
      </div>
      
      <div>
        <h2>Agregar Texto</h2>
        <form onSubmit={handleText}>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Texto" rows="3" />
          <button type="submit">Guardar</button>
          {textMsg && <p>{textMsg}</p>}
        </form>
        
        {texts.length > 0 && (
          <div>
            <h3>Textos ({texts.length})</h3>
            {texts.map(t => (
              <div key={t.id}>
                <p>{t.text}</p>
                <small>{t.date}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;