export interface TextSegment {
	text: string;
	strong: boolean;
}

export function parseEmphasis(input: string): TextSegment[] {
	return input
		.split(/\*\*(.+?)\*\*/g)
		.map((text, index) => ({ text, strong: index % 2 === 1 }))
		.filter((segment) => segment.text.length > 0);
}
