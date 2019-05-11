export default {
  input: 'src/moduleA.js',
	output: [
		{
			format: 'umd',
			name: 'DUALEXPORT',
			file: 'build/moduleA.js',
			indent: '\t'
		},
    {
      format: "es",
      file: "build/moduleA.module.js",
      indent: "\t"
    }
	]
};
