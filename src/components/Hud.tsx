import Bar from "./Bar";
import Money from "./Money";
import Time from "./Time";
import Weapon from "./Weapon";

const Hud = () => {
  return (
    <div className="select-none">
      <div className="flex flex-row">
        <div className="mr-2">
          <Weapon weaponName="deserteagle" clipAmmo={10} remainingAmmo={69} />
        </div>
        <div className="w-[140px]">
          <Time hour={6} minute={5} />
          <div className="mt-2">
            <Bar
              foregroundColor="bg-white"
              backgroundColor="bg-hud-grey"
              value={30}
            />
            <Bar
              foregroundColor="bg-hud-red"
              backgroundColor="bg-hud-dark-red"
              value={25}
            />
          </div>
        </div>
      </div>
      <div className="mt-[-0.75rem]">
        <Money amount={-1337} />
      </div>
    </div>
  );
};

export default Hud;
