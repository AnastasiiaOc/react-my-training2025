// export default function PilotCard({
//     pilot: { avatar, name, rank, spec, active },
// }) {
//     return (
//         <div>
//             <img src={avatar} alt={name} />
//             <p>Name: {name}</p>
//             <p>Rank: {rank}</p>
//             {active && <p>Spec: {spec}</p>}
//             <p>Status: {active ? "active" : "retired"}</p>
//         </div>
//     );
// }
import clsx from "clsx";
import css from "./PilotCard.module.css";

export default function PilotCard({
    pilot: { avatar, name, rank, spec, active },
}) {
    const containerClsx = clsx(
        css.container,
        active ? css.isActive : css.isRetired
    );

    return (
        <div className={containerClsx}>
            <img src={avatar} alt={name} />
            <p className={css.text}>Name: {name}</p>
            <p className={css.text}>Rank: {rank}</p>
            <p className={css.text}>Spec: {spec}</p>
            <p className={css.text}>Status: {active ? "active" : "retired"}</p>
        </div>
    );
}