import React, {useEffect, useState} from 'react';
import './global.css'
import './App.css'
import "./Sidebar.css"
import "./Main.css"

function App() {
  const [githubUsername, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords
        setLatitude(latitude)
        setLongitude(longitude)
      },
      err => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, []);

  async function handleAddDev(e){
    e.preventDefault()
  }

  return <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" value={githubUsername} onChange={e => setGithubUsername(e.target.value)} required />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)} required />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} required />
          </div>
        </div>

        <input type="submit" value="Salvar"/>

      </form>
    </aside>
    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/21148760?s=460&v=4" alt="dev_avatar"/>
            <div className="user-info">
              <strong>Elder Louzada</strong>
              <span>React , MongoDB, Vue</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus debitis dolorem facilis pariatur, ex sapiente alias beatae ipsam vero mollitia ratione expedita. Id debitis iusto soluta delectus tempore. Nemo.</p>
          <a href="https://github.com/reedlex98">Acesse meu perfil</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/21148760?s=460&v=4" alt="dev_avatar"/>
            <div className="user-info">
              <strong>Elder Louzada</strong>
              <span>React , MongoDB, Vue</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus debitis dolorem facilis pariatur, ex sapiente alias beatae ipsam vero mollitia ratione expedita. Id debitis iusto soluta delectus tempore. Nemo.</p>
          <a href="https://github.com/reedlex98">Acesse meu perfil</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/21148760?s=460&v=4" alt="dev_avatar"/>
            <div className="user-info">
              <strong>Elder Louzada</strong>
              <span>React , MongoDB, Vue</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus debitis dolorem facilis pariatur, ex sapiente alias beatae ipsam vero mollitia ratione expedita. Id debitis iusto soluta delectus tempore. Nemo.</p>
          <a href="https://github.com/reedlex98">Acesse meu perfil</a>
        </li>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/21148760?s=460&v=4" alt="dev_avatar"/>
            <div className="user-info">
              <strong>Elder Louzada</strong>
              <span>React , MongoDB, Vue</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus debitis dolorem facilis pariatur, ex sapiente alias beatae ipsam vero mollitia ratione expedita. Id debitis iusto soluta delectus tempore. Nemo.</p>
          <a href="https://github.com/reedlex98">Acesse meu perfil</a>
        </li>
      </ul>
    </main>
  </div>
}


export default App