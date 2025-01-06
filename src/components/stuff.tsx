import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { InfoCircledIcon } from '@radix-ui/react-icons';

// Alert Component
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-red-500/50 text-red-600 dark:border-red-500 [&>svg]:text-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div 
      ref={ref} 
      role="alert" 
      className={`${alertVariants({ variant })} ${className || ''}`}
      {...props} 
    />
  )
);
Alert.displayName = "Alert";

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5 
      ref={ref} 
      className={`mb-1 font-medium leading-none tracking-tight ${className || ''}`}
      {...props} 
    />
  )
);
AlertTitle.displayName = "AlertTitle";

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={`text-sm [&_p]:leading-relaxed ${className || ''}`}
      {...props} 
    />
  )
);
AlertDescription.displayName = "AlertDescription";

// Button Component
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button 
      ref={ref} 
      className={`${buttonVariants({ variant, size })} ${className || ''}`}
      {...props} 
    />
  )
);
Button.displayName = "Button";

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props} 
    />
  )
);
Card.displayName = "Card";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}
      {...props} 
    />
  )
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3 
      ref={ref} 
      className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`}
      {...props} 
    />
  )
);
CardTitle.displayName = "CardTitle";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p 
      ref={ref} 
      className={`text-sm text-muted-foreground ${className || ''}`}
      {...props} 
    />
  )
);
CardDescription.displayName = "CardDescription";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={`p-6 pt-0 ${className || ''}`}
      {...props} 
    />
  )
);
CardContent.displayName = "CardContent";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm 
        ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
        placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed 
        disabled:opacity-50 ${className || ''}`}
      {...props}
    />
  )
);
Input.displayName = "Input";

// Example usage with TypeScript
const ExampleUsage: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Alert>
            <AlertTitle>Alert Title</AlertTitle>
            <AlertDescription>Alert Description</AlertDescription>
          </Alert>
          
          <div className="flex gap-2">
            <Button onClick={handleClick}>Default Button</Button>
            <Button variant="secondary" onClick={handleClick}>Secondary Button</Button>
          </div>
          
          <Input placeholder="Type something..." onChange={(e) => console.log(e.target.value)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ExampleUsage;





export const BlockchainComparison = () => {
  // Traditional blockchain throughput data
  const throughputData = [
    { name: 'Bitcoin', tps: 7, type: 'Global Limit' },
    { name: 'Ethereum', tps: 15, type: 'Global Limit' },
    { name: 'Solana', tps: 65000, type: 'Global Limit' },
    { name: 'Tangle', tps: null, type: 'No Global Limit' }
  ];

  // Finality time data (in seconds)
  const finalityData = [
    { name: 'Bitcoin', time: 3600 }, // 1 hour
    { name: 'Ethereum', time: 780 }, // 13 minutes
    { name: 'Solana', time: 0.4 },
    { name: 'Tangle', time: 0.1 }
  ];

  // Energy consumption per transaction (in Wh)
  const energyData = [
    { name: 'Bitcoin', energy: 707000 }, // 707 kWh
    { name: 'Ethereum', energy: 62000 }, // 62 kWh
    { name: 'Solana', energy: 0.0026 },
    { name: 'Tangle', energy: 0.0015 }
  ];

  // Security level comparison
  const securityData = [
    { name: 'Bitcoin', bits: 128, protection: 'Classical' },
    { name: 'Ethereum', bits: 128, protection: 'Classical' },
    { name: 'Solana', bits: 128, protection: 'Classical' },
    { name: 'Tangle', bits: 256, protection: 'Quantum' }
  ];

  const CustomBar = (props) => {
    const { x, y, width, height, name } = props;
    if (name === 'Tangle') {
      return (
        <g>
          <text x={x + width/2} y={y + height/2} textAnchor="middle" dominantBaseline="middle" fontSize="14">
            ∞
          </text>
          <text x={x + width/2} y={y + height/2 + 20} textAnchor="middle" dominantBaseline="middle" fontSize="12">
            (Local Processing)
          </text>
        </g>
      );
    }
    return <rect x={x} y={y} width={width} height={height} fill="#3b82f6" />;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Blockchain Architecture Comparison</CardTitle>
          <CardDescription>
            Comparing architectural approaches and performance characteristics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Throughput Comparison */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-medium">Transaction Processing Model</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={throughputData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (!active || !payload || !payload.length) return null;
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-2 border rounded shadow">
                            <p className="font-medium">{data.name}</p>
                            <p className="text-sm">
                              {data.name === 'Tangle' 
                                ? 'Unlimited (Local Processing)'
                                : `${data.tps.toLocaleString()} TPS (Global Limit)`}
                            </p>
                          </div>
                        );
                      }}
                    />
                    <Bar 
                      dataKey="tps"
                      shape={<CustomBar />}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <InfoCircledIcon className="inline mr-2" />
                  Unlike traditional blockchains that have global throughput limits, 
                  Tangle processes all transactions locally with no global bottleneck. 
                  Each device operates independently, making the system's total throughput 
                  effectively unlimited.
                </p>
              </div>
            </div>

            {/* Architecture Comparison Card */}
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-medium mb-2">Traditional Blockchain</h4>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• Global transaction queue</li>
                      <li>• Network-wide consensus required</li>
                      <li>• Fixed global TPS limit</li>
                      <li>• All nodes process all transactions</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-medium mb-2">Tangle</h4>
                    <ul className="text-sm space-y-2 text-gray-600">
                      <li>• Local transaction processing</li>
                      <li>• No global consensus needed</li>
                      <li>• No global TPS limit</li>
                      <li>• Devices process only their transactions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other metrics remain the same */}
            <div className="h-64">
              <h3 className="text-lg font-medium mb-4">Transaction Finality Time (seconds)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={finalityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis 
                    scale="log"
                    domain={[0.1, 10000]}
                    tickFormatter={(value) => `${value}s`}
                  />
                  <Tooltip 
                    formatter={(value) => `${value} seconds`}
                  />
                  <Bar dataKey="time" fill="#4ade80" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="h-64">
              <h3 className="text-lg font-medium mb-4">Energy per Transaction (Wh)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis 
                    scale="log"
                    domain={[0.001, 1000000]}
                    tickFormatter={(value) => `${value} Wh`}
                  />
                  <Tooltip 
                    formatter={(value) => `${value.toLocaleString()} Wh`}
                  />
                  <Bar dataKey="energy" fill="#f472b6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Security Level</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={securityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 300]} />
                    <Tooltip 
                      formatter={(value, name, props) => [
                        `${value} bits (${props.payload.protection})`,
                        'Security Level'
                      ]}
                    />
                    <Bar dataKey="bits" fill="#a78bfa" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};