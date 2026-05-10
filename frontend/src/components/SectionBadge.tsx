interface Props {
  label: string;
}

export default function SectionBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange bg-brand-cream px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-orange">
      {label}
    </span>
  );
}
