type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return (
    <div className="greeting">
      <h2>Hello, {name}! ready to lock in?</h2>
    </div>
  );
}

export default Greeting;
