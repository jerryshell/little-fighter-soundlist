import './App.css'

const bgmList = ["boss1.flac", "boss2.flac", "main.flac", "stage1.flac", "stage2.flac", "stage3.flac", "stage4.flac", "stage5.flac"]

const soundList = ["Armor class.wav", "Armor just hit.wav", "Armor small hit.wav", "Arrow Shot.wav", "Arrow ground hit.wav", "Baseball hit by bat.wav", "Baseball.wav", "Bat Lazer.wav", "Bat break.wav", "Bat hit.wav", "Bat's bats hit.wav", "Bat's bats.wav", "Block Punch.wav", "Bloody Attack.wav", "Bloody Heavy Attack.wav", "Boulder Break.wav", "Boulder hit.wav", "Burnt.wav", "Casting Energy Shield.wav", "Casting Heal.wav", "Command COME.wav", "Command MOVE.wav", "Command STAY.wav", "Crate break.wav", "Crate hit.wav", "Crate hit2.wav", "Critical Arrow.wav", "Davis Energy Ball.wav", "Davis Uppercut YAH!!!.wav", "Deep Dashing Strafe HAR.wav", "Deep Energy Blast.wav", "Dennis Chasing Ball.wav", "Dennis Energy Ball.wav", "Drink.wav", "Drop.wav", "End 1-1_2-2_VS - Battle.wav", "Energy Disk Fly.wav", "Energy Shield Gone.wav", "Energy Shield Sound.wav", "Explode_energy ball hit and palm.wav", "Fire ball.wav", "Firzen Cannon shooting.wav", "Firzen charge firzen cannon HAI!!!.wav", "Free Hostage.wav", "Grab Attack.wav", "Grab.wav", "Henry Dragon Palm HUNK!!!.wav", "Henry Flute 1.wav", "Henry Flute 2.wav", "Henry Flute 3 (long).wav", "Henry Flute 4.wav", "Henry Flute 5 (long).wav", "Ice Ball.wav", "Ice Sword hit.wav", "Iced.wav", "Icicle.wav", "Inferno.wav", "Inferno2.wav", "Jack Flipkick hor!.wav", "Jan Angels_Heal.wav", "John Energy Ball Charge.wav", "Julian Big Bang and Soul Bomb Explode.wav", "Julian Skull Blast Hit.wav", "Jump.wav", "Knight Swing Attack 1.wav", "Louis Palm HEI!!!.wav", "Louis Thunderpunch_Julian Soulpunch.wav", "Menu Sound - Abort.wav", "Menu Sound - Enter.wav", "Menu Sound - Select.wav", "Monk Palm HULK!.wav", "Multi-Arrow.wav", "No longer Iced.wav", "Pick up_stop running.wav", "Poion hit.wav", "Potion break.wav", "Pull Arrow.wav", "Punch miss.wav", "Punch.wav", "Rudolf Blades Shing.wav", "Rudolf Clone.wav", "Rudolf Invisible.wav", "Rudolf Keep Blades.wav", "Rudolf Shadow_Mirror Image.wav", "Rudolf Transform.wav", "Run Ted.wav", "Run Tick.wav", "Run Tok.wav", "Scyte Ting.wav", "Shoot John Energy Ball.wav", "Shurinken ting.wav", "Stage Command I JOIN YOU.wav", "Stage-End.wav", "Summon Energy Disk.wav", "Summon Ice Sword.wav", "Summon Skull Blast Projectile.wav", "Super Hit Bish.wav", "Teleport.wav", "Weapon ting.wav", "Weapon ting2.wav", "Whirlwind Casting Voom.wav", "Whirlwind.wav", "Woob Swing Sound.wav", "Woody Energy Blast.wav", "Woody Tiger Dash HOI!!!.wav", "Woody Tiger Dash.wav", "Wow Swing Sound.wav"]

function App() {
  return (
    <>
      <h1>Little Fighter - Soundlist</h1>
      <details open>
        <summary>BGM</summary>
        {
          bgmList.map((filename) => {
            return <fieldset>
              <legend>{filename}</legend>
              <audio controls src={`sound/${filename}`} />
            </fieldset>
          })
        }
      </details>
      <br />
      <details open>
        <summary>SOUND</summary>
        {
          soundList.map((filename) => {
            return <fieldset>
              <legend>{filename}</legend>
              <audio controls src={`sound/${filename}`} />
            </fieldset>
          })
        }
      </details>
      <br />
      <a href="https://github.com/jerryshell/little-fighter-soundlist" target="_blank">GitHub: jerryshell/little-fighter-soundlist</a>
    </>
  )
}

export default App
