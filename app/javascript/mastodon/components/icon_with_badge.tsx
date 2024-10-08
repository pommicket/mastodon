import type { IconProp } from './icon';
import { Icon } from './icon';

interface Props {
  id: string;
  icon: IconProp;
  count: number;
  issueBadge: boolean;
  className: string;
}
export const IconWithBadge: React.FC<Props> = ({
  id,
  icon,
  count,
  issueBadge,
  className,
}) => (
  <i className='icon-with-badge'>
    <Icon id={id} icon={icon} className={className} />
    {count > 0 && (
      <i className='icon-with-badge__badge'>!</i>
    )}
    {issueBadge && <i className='icon-with-badge__issue-badge' />}
  </i>
);
