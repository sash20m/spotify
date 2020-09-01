import * as React from 'react';

import './Mask.scss';

export const Mask: React.FC<{ onClick?: () => void }> = ({ onClick }) => <div className="zh-mask" onClick={onClick} />;
