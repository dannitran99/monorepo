import { Button } from 'shared-ui';

export default function Index() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log('message');
        }}
      >
        Click me
      </Button>
    </div>
  );
}
