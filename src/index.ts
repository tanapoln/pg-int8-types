import pg from "pg";

export function parseInt8Fallback(value: string | number | bigint | boolean): bigint | number {
	const num = BigInt(value);
	if (num <= Number.MAX_SAFE_INTEGER) {
		return Number(num);
	} else {
		return num;
	}
}

export function changeParser() {
	pg.types.setTypeParser(pg.types.builtins.INT8, parseInt8Fallback);
}
