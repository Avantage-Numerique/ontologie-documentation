
class VersionNote {
    index;
    value;
    link;
    tag="p"

    constructor(index=-1, params) {
        this.index = index;
        this.value = params.value;
        this.link = params.link ?? "";
        this.tag = params.tag ?? "li";
    }

    /**
     * WIP for rendering subNotes in a "recurvice kinda way
     * @return {JSX.Element}
     */
    renderMultiple() {
        return (
            <>
                {Array.isArray(this.value) &&
                    this.value.map((subNoteRaw, index) => {
                        let subNote = new VersionNote(index, subNoteRaw);
                        return (subNote.render());
                    })
                }
            </>
        );
    }

    /**
     * This
     * @return {JSX.Element}
     */
    render() {
        if (Array.isArray(this.value)) {
            return (this.renderMultiple());
        }
        const Tag = this.tag;
        return (
            <Tag key={`note${this.value}${this.index}`}>{this.value}</Tag>
        )
    }
}
export default VersionNote;