import React from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export default class Article extends React.Component<{ path: string }, { md: string }> {
    state = { md: '' };

    // On(props: { path: string }) {
    //     super(props);
    // }
    componentDidMount() {
        fetch(`/doc${this.props.path}.md`)
            .then(res => res.text())
            .then((content) => {
                this.setState({
                    md: content
                })
            })
    }

    render() {
        return (
            <ReactMarkdown children={this.state.md} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />
        );
    }
}