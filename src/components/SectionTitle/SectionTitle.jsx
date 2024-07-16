

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h2 className="uppercase py-2 my-2 text-3xl border-y">{heading}</h2>
        </div>
    );
};

export default SectionTitle;