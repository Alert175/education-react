import CustomButton from 'components/button';

import classes from 'styles/user.module.scss';

export default function Users() {
  return (
    <div className={classes.firstBtn}>
      <CustomButton />
      <CustomButton />
    </div>
  );
}
