import { useState } from 'react'
import './App.css'
import { flushSync } from 'react-dom'

function App() {


  const services = [
    "Casamento",
    "Noivas",
    "Eventos",
    "Ensaio pessoal",
    "Moda",
    "Campanha profissional",
    "Campanha conceitual",
    "Publicidade",
    "Produto",
    "Acessórios"
  ]

  const backgroundImages = [
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/377bad56f63a096c91ae4ddc032ef1bd/revisions/597cba5cfd614754b69e987ea1dd745b/renditions/efc480bd112f497e523ca3b3dc1c44c2',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/3b9ff8a2f44d7725860dfd88c894c222/revisions/655bc167eb5c408baf466e60ab8c9277/renditions/5adb1e06203bcbd27a708e18a3e60653',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/33d385442efbcafa7cfa8321f4afeb86/revisions/92c31bba7bc943daa26021a5eff5c85f/renditions/8b8babfe111a22856d76055ce91d7ae7',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/a108e004b5ae11bd16ba9b4f07529ff3/revisions/61f78ef9f777458797259e2147a8b4f7/renditions/5d669c834f4907f04ca7adf43a50a0d1',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/e27c6dc2c7aab5282203915ca02a5eff/revisions/50d18c8fd3444874a7cb7a7574eb3259/renditions/3b31060d151cb9cbd5a1d79713d52c00',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/1d75c4d1fdb0b5395cd65e1c22f088a9/revisions/e523e7b35bb04786be6c42f9f76c0385/renditions/b338bbdeb7636c3ab5ef7c618ee3126b',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/675d3d632b4fbcc471d775db6a4ab289/revisions/4fd157a9ae2bc0113cefc34d0dfe9bbd/renditions/f5a2cb2d2f3134108b6e57c3a7ef407b',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/a8ec4e44ef75481887ea1ead92c107af/revisions/8a6d7eee177244329e35e83baf8016be/renditions/49329121f7dc119ea7b2054461831806',
    'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/03f9afbd3f30426eacb8060f582d33e4/revisions/9da604c4a43e4e0c817ad1d31db133d1/renditions/242bfac5aec3c0aec980602e7dc972d6',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/c46517bd15dfffcde3cc7df8ad39359e/revisions/6cfd28095eea4115a04ecf64cae2b3e8/renditions/43a31c71ae3e069ae2422f385f9bac63',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/03edba5af7bc4276b27baa2411e85a99/revisions/1c44a1c8fa6347baba71331936b0ba47/renditions/4ed2a208941b7a2176390ac9a622a6e0',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/d28506715a224e8e97ce845cb45ab3c1/revisions/757c2b71306f4db697597844d86bbcce/renditions/224b01fa3e4b9c199c276671086b1458',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/11e1fd6f043047878ed9f412238036c0/revisions/ca4a24ffbf084219ad58bf79907939ba/renditions/9d9c02dd72f3ba94b0a45993494f7462',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/30fc76a3ef7641a99aefb25ef4422df2/revisions/395f4b9695434561a80250885722c3d8/renditions/e6897ca116365ce19d8f8a5e25999b48',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/3f6ba56386e149d097d2bddafc7abde5/revisions/fc3e3005260fb4a8ebd89f5a244de0b5/renditions/762cb571b39b3b4beade3c633a33e3da',
'https://lightroom.adobe.com/v2c/spaces/45bb17d89cb7470eb5b0e59a97fb1ffc/assets/27d8ed80b5ba499aa88e21988facf260/revisions/2d5b42330f9441268c301b4686edbf5e/renditions/01b141e07ab1b790fc3ad6e362049ccc' 
    
  ]
  const [bla, setBla] = useState(false)

  const renderServiceButtons = (serviceGroup: string[]) => (
    <div className='services-section'>
      {serviceGroup.map((service) => (
        <span key={service} className='service-button-outline'>
          <span
            onClick={() => {
              //@ts-ignore
              document.startViewTransition(() => {
                flushSync(() => setBla(true))
              })
            }}
            className="service-button"
          >
            {service.toUpperCase()}
          </span>
        </span>
      ))}
    </div>
  );
  let rows = [1, 2];

  if (bla) {
    return [1].map((row) => (
      <div key={row} className={`image-row row-${row}`} style={{ "flexDirection": "column" }}>
        {backgroundImages.map((img, index) => (
          <img loading="lazy" style={{ "viewTransitionName": `--n${row}-${index}` }} key={index} src={img} alt={`Background ${index + 1}`} />
        ))}
        {backgroundImages.map((img, index) => (
          <img loading="lazy" style={{ "viewTransitionName": `--n${row}-${index + backgroundImages.length}` }} key={index + backgroundImages.length} src={img} alt={`Background ${index + 1}`} />
        ))}
      </div>
    ))
  }


  return (
    <div className="app">
      <div className="background-gallery" >
        {rows.map((row) => (
          <div key={row} className={`image-row row-${row}`}>
            {backgroundImages.map((img, index) => (
              <img style={{ "viewTransitionName": `--n${row}-${index}` }} key={index} src={img} alt={`Background ${index + 1}`} />
            ))}
            {backgroundImages.map((img, index) => (
              <img style={{ "viewTransitionName": `--n${row}-${index + backgroundImages.length}` }} key={index + backgroundImages.length} src={img} alt={`Background ${index + 1}`} />
            ))}
          </div>
        ))}
      </div>
      <div className="favicon-container">
        <img draggable={false} src="/favicon.png" alt="Favicon" className="favicon" />
      </div>
      <div className="content">
        <header className="banner">
          <div className="logo"></div>

        </header>
        <nav>
          <div className='social-media'>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
          {renderServiceButtons(services.slice(0, 3))}
          {renderServiceButtons(services.slice(3, 5))}
          {renderServiceButtons(services.slice(5, 7))}
          {renderServiceButtons(services.slice(7))}
        </nav>
      </div>
    </div>
  )
}



export default App
