import { weaponInfos } from "../weapons";

export type WeaponProps = {
  weaponName: string;
  clipAmmo: number;
  remainingAmmo: number;
};

const Weapon = ({ weaponName, clipAmmo, remainingAmmo }: WeaponProps) => {
  const weaponInfo = weaponInfos.find((w) => w.weaponName === weaponName);

  if (!weaponInfo) {
    throw new Error(`No weapon found with name '${weaponName}'`);
  }

  return (
    <div className="w-[100px] relative inline-block">
      <img src={weaponInfo.image} alt="Weapon" className="block" />
      <p className="font-outline-2 text-hud-white font-aharoni absolute translate-y-[-50%] top-[88%] left-0 right-0 text-center text-3xl">
        {clipAmmo}-{remainingAmmo}
      </p>
    </div>
  );
};

export default Weapon;
