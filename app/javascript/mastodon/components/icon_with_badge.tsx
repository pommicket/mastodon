import { Icon } from './icon';

interface Props {
  id: string;
  count: number;
  issueBadge: boolean;
  className: string;
}
export const IconWithBadge: React.FC<Props> = ({
  id,
  count,
  issueBadge,
  className,
}) => (
  <i className='icon-with-badge'>
    <Icon id={id} fixedWidth className={className} />
    {count > 0 && <i className='icon-with-badge__badge'>!</i>}
    {issueBadge && <i className='icon-with-badge__issue-badge' />}
  </i>
);
