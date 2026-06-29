type Props = { businessName: string };

export default function StepDone({ businessName }: Props) {
  return (
    <div className="text-center py-10">
      <div className="text-5xl mb-4">👍</div>
      <h1 className="font-heading text-2xl font-bold text-forest mb-2">
        You're all set!
      </h1>
      <p className="font-body text-muted-foreground text-sm max-w-xs mx-auto">
        We've got everything we need for {businessName}. Jai will be in touch soon with your site.
      </p>
    </div>
  );
}
