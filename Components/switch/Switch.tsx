import { Switch } from 'react-native-paper'

import React, { useState } from 'react'

export default function SwitchCompnent() {

  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
  
}
