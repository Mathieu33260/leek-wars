import { Keyword } from '@/component/editor/keywords'

class AI {
	public id!: number
	public name!: string
	public code!: string
	public valid!: boolean
	public v2!: boolean
	public modified: boolean = false
	public dragging: boolean = false
	public folder!: number
	public path!: string
	public folderpath!: string
	public includes: AI[] = []
	public functions: Keyword[] = []
	public globals: {[key: string]: Keyword} = {}
	public total_lines!: number
	public total_chars!: number
	public included_lines!: number
	public included_chars!: number
	public selected: boolean = false
	public errors: number = 0
	public warnings: number = 0
	public todos: number = 0
	public equipped: boolean = false
	public entrypoints: number[] = []

	constructor(data: any) {
		Object.assign(this, data)
	}

	get entrypoint() {
		return this.equipped || this.entrypoints.length === 0
	}
}
export { AI }
