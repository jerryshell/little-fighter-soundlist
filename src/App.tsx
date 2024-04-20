import './App.css'
import SoundList from './SoundList'

const bgmList = ["boss1.flac", "boss2.flac", "main.flac", "stage1.flac", "stage2.flac", "stage3.flac", "stage4.flac", "stage5.flac",]

const swingList = ["Woob Swing Sound.wav", "Wow Swing Sound.wav",]

const punchList = ["Punch.wav", "Super Hit Bish.wav", "Block Punch.wav", "Punch miss.wav",]

const runList = ["Run Tick.wav", "Run Tok.wav", "Run Ted.wav", "Pick up_stop running.wav",]

const arrowList = ["Arrow Shot.wav", "Multi-Arrow.wav", "Arrow ground hit.wav", "Pull Arrow.wav", "Critical Arrow.wav",]

const armorList = ["Armor just hit.wav", "Armor small hit.wav", "Armor class.wav",]

const iceList = ["Ice Ball.wav", "Summon Ice Sword.wav", "Ice Sword hit.wav", "Iced.wav", "No longer Iced.wav",]

const batList = ["Bat Lazer.wav", "Bat's bats hit.wav", "Bat's bats.wav",]

const baseballList = ["Baseball.wav", "Baseball hit by bat.wav", "Bat hit.wav", "Bat break.wav",]

const bloodyList = ["Bloody Attack.wav", "Bloody Heavy Attack.wav",]

const boulderList = ["Boulder hit.wav", "Boulder Break.wav",]

const potionList = ["Potion hit.wav", "Potion break.wav", "Drink.wav",]

const castingList = ["Casting Energy Shield.wav", "Casting Heal.wav",]

const crateList = ["Crate hit.wav", "Crate hit2.wav", "Crate break.wav",]

const commandList = ["Command COME.wav", "Command MOVE.wav", "Command STAY.wav", "Stage Command I JOIN YOU.wav",]

const grabList = ["Grab.wav", "Grab Attack.wav",]

const unclassifiedList = ["Burnt.wav", "Davis Energy Ball.wav", "Davis Uppercut YAH!!!.wav", "Deep Dashing Strafe HAR.wav", "Deep Energy Blast.wav", "Dennis Chasing Ball.wav", "Dennis Energy Ball.wav", "Drop.wav", "End 1-1_2-2_VS - Battle.wav", "Energy Disk Fly.wav", "Energy Shield Gone.wav", "Energy Shield Sound.wav", "Explode_energy ball hit and palm.wav", "Fire ball.wav", "Firzen Cannon shooting.wav", "Firzen charge firzen cannon HAI!!!.wav", "Free Hostage.wav", "Henry Dragon Palm HUNK!!!.wav", "Henry Flute 1.wav", "Henry Flute 2.wav", "Henry Flute 3 (long).wav", "Henry Flute 4.wav", "Henry Flute 5 (long).wav", "Icicle.wav", "Inferno.wav", "Inferno2.wav", "Jack Flipkick hor!.wav", "Jan Angels_Heal.wav", "John Energy Ball Charge.wav", "Julian Big Bang and Soul Bomb Explode.wav", "Julian Skull Blast Hit.wav", "Jump.wav", "Knight Swing Attack 1.wav", "Louis Palm HEI!!!.wav", "Louis Thunderpunch_Julian Soulpunch.wav", "Menu Sound - Abort.wav", "Menu Sound - Enter.wav", "Menu Sound - Select.wav", "Monk Palm HULK!.wav", "Rudolf Blades Shing.wav", "Rudolf Clone.wav", "Rudolf Invisible.wav", "Rudolf Keep Blades.wav", "Rudolf Shadow_Mirror Image.wav", "Rudolf Transform.wav", "Scyte Ting.wav", "Shoot John Energy Ball.wav", "Shurinken ting.wav", "Stage-End.wav", "Summon Energy Disk.wav", "Summon Skull Blast Projectile.wav", "Teleport.wav", "Weapon ting.wav", "Weapon ting2.wav", "Whirlwind Casting Voom.wav", "Whirlwind.wav", "Woody Energy Blast.wav", "Woody Tiger Dash HOI!!!.wav", "Woody Tiger Dash.wav",]


function App() {
  return (
    <>
      <h1>Little Fighter - Soundlist</h1>

      <SoundList title="BGM" soundList={bgmList} />
      <br />

      <SoundList title="SWING" soundList={swingList} />
      <br />

      <SoundList title="PUNCH" soundList={punchList} />
      <br />

      <SoundList title="RUN" soundList={runList} />
      <br />

      <SoundList title="ARROW" soundList={arrowList} />
      <br />

      <SoundList title="ARMOR" soundList={armorList} />
      <br />

      <SoundList title="ICE" soundList={iceList} />
      <br />

      <SoundList title="BAT" soundList={batList} />
      <br />

      <SoundList title="BASEBALL" soundList={baseballList} />
      <br />

      <SoundList title="BLOODY" soundList={bloodyList} />
      <br />

      <SoundList title="BOULDER" soundList={boulderList} />
      <br />

      <SoundList title="POTION" soundList={potionList} />
      <br />

      <SoundList title="CASTING" soundList={castingList} />
      <br />

      <SoundList title="CRATE" soundList={crateList} />
      <br />

      <SoundList title="COMMAND" soundList={commandList} />
      <br />

      <SoundList title="GRAB" soundList={grabList} />
      <br />

      <SoundList title="unclassified" soundList={unclassifiedList} />
      <br />

      <a href="https://github.com/jerryshell/little-fighter-soundlist" target="_blank">GitHub: jerryshell/little-fighter-soundlist</a>
    </>
  )
}

export default App
