const Albums = () => {
  const FirstAlbum = () => {
    return (
      <div>
        <div>
          <img
            className="Albums"
            src={require("./Images/Existence.jpg").default}
            alt="Existence album"
            height={150}
            width={150}
          />
          <div>
            <h1>Existence is Futile</h1>
            <h2>Name Of Songs From Album</h2>
            1. The Fate of the World on Our Shoulders <br />
            2. Existential Terror <br />
            3. Necromantic Fantasies <br />
            4. Crawling King Chaos <br />
            5. Here Comes a Candle... (Infernal Lullaby) <br />
            6. Black Smoke Curling from the Lips of War <br />
            7. Discourse Between a Man and His Soul <br />
            8. The Dying of the Embers <br />
            9. Ashen Mortality <br />
            10. How Many Tears to Nurture a Rose? <br />
            11. Suffer Our Dominion <br />
            12. Us, Dark, Invincible
          </div>
        </div>
      </div>
    );
  };

  const SecondAlbum = () => {
    return (
      <div>
        <div>
          <img
            className="Albums"
            src={require("./Images/Live.jpg").default}
            alt="Live bait for the dead album"
            height={150}
            width={150}
          />
          <div>
            <h1>Live Bait For The Dead</h1>
            <h2>Name Of Songs From Album</h2>
            1. Intro – The Ceremony Opens <br />
            2. Lord Abortion <br />
            3. Ebony Dressed for Sunset <br />
            4. The Forest Whispers My Name <br />
            5. Cthulhu Dawn <br />
            6. Dusk and Her Embrace <br />
            7. The Principle of Evil Made Flesh <br />
            8. Cruelty Brought Thee Orchids <br />v 9. Her Ghost in the Fog{" "}
            <br />
            10. Summer Dying Fast <br />
            11. Interlude – Creatures That Kissed in Cold Mirrors <br />
            12. From the Cradle to Enslave <br />
            13. Queen of Winter, Throned <br />
            14. Born in a Burial Gown (The Polished Coffin Mix) <br />
            15. No Time to Cry (Sisters of No Mercy Mix) <br />
            16. Funeral in Carpathia (Soundcheck Recording) <br />
            17. Deleted Scenes of a Snuff Princess <br />
            18. Scorched Earth Erotica (Original Demo(n) Version) <br />
            19. Nocturnal Supremacy (Soundcheck Recording) <br />
            20. From the Cradle to Enslave (Under Martian Rule Mix) <br />
            21. The Fire Still Burns
          </div>
        </div>
      </div>
    );
  };

  const ThirdAlbum = () => {
    return (
      <div>
        <div>
          <img
            className="Midian"
            src={require("./Images/Midian.jpg").default}
            alt="Midian album"
            height={150}
            width={150}
          />
          <div>
            <h1>Midian</h1>
            <h2>Name Of Songs From Album</h2>
            1. At the Gates of Midian (Instrumental) <br />
            2. Cthulhu Dawn <br />
            3. Saffron's Curse <br />
            4. Death Magick for Adepts <br />
            5. Lord Abortion <br />
            6. Amor e Morte <br />
            7. Creatures That Kissed in Cold Mirrors (Instrumental) <br />
            8. Her Ghost in the Fog <br />
            9. Satanic Mantra <br />
            10. Tearing the Veil from Grace <br />
            11. Tortured Soul Asylum <br />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <FirstAlbum />
      <SecondAlbum />
      <ThirdAlbum />
    </div>
  );
};

export default Albums;
