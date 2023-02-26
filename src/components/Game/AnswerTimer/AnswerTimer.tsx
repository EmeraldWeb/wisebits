import { useSelector } from 'react-redux';
import { getLastTime } from '../../../data/store/states/game/selectors';

type TimeUnits = 'seconds' | 'minutes' | 'milliseconds';

type Props = {
    className?: string,
    timeUnits?: TimeUnits,
    label?: string,
}

export function AnswerTimer({ className, label, timeUnits = 'seconds' }: Props) {
    const lastTime = useSelector(getLastTime);

    const timeUnitsDict: Record<TimeUnits, keyof Date> = {
        milliseconds: 'getMilliseconds',
        seconds: 'getSeconds',
        minutes: 'getMinutes',
    };
    const method = timeUnitsDict[timeUnits];

    // @ts-ignore // TODO
    const unit = new Date(lastTime)[method]();

    const finishLabel = label ?? `${timeUnits.replace(/^./, timeUnits[0].toUpperCase())} left`;
    const resultString = `${finishLabel}: ${unit}`;

    return (
        <div
            role="timer"
            className={className}
        >
            {resultString}
        </div>
    );
}
