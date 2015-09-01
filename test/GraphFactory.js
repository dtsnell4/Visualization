"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/graph/Graph","src/common/Palette", "src/graph/Vertex", "src/graph/Edge"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.graph_Graph, root.common_Palette, root.graph_Vertex, root.graph_Edge);
    }
}(this, function (DataFactory, Graph, Palette, Vertex, Edge) {
    return {
        graph: {
            simple: function () {
                var graph = new Graph();
                
                var vertices = [];
                var edges = [];

                var palette = Palette.ordinal("dark2");
                
                var rawData = DataFactory.Graph.simple;
                rawData.nodes.forEach(function (node) {
                    var annotation = [];
                    if (Math.random() < 0.10) {
                        annotation.push({
                            "faChar": "A",
                            "tooltip": "Test A",
                            "shape_colorFill": "white",
                            "image_colorFill": "red"
                        });
                    }
                    if (Math.random() < 0.10) {
                        annotation.push({
                            "faChar": "B",
                            "tooltip": "Test B",
                            "shape_colorFill": "green",
                            "shape_colorStroke": "green",
                            "image_colorFill": "white"
                        });
                    }
                    if (Math.random() < 0.10) {
                        annotation.push({
                            "faChar": "C",
                            "tooltip": "Test C",
                            "shape_colorFill": "navy",
                            "shape_colorStroke": "navy",
                            "image_colorFill": "white"
                        });
                    }
                    vertices.push(new Vertex()
                        .text(node.name)
                        .textbox_shape_colorStroke(palette(node.group))
                        .textbox_shape_colorFill("whitesmoke")
                        .icon_shape_colorStroke(palette(node.group))
                        .icon_shape_colorFill(palette(node.group))
                        .annotationIcons(annotation)
                        .faChar(node.name[0])
                    );
                }, graph);

                function createEdge(source, target, label) {
                    return new Edge()
                        .sourceVertex(source)
                        .targetVertex(target)
                        .sourceMarker("circleFoot")
                        .targetMarker("arrowHead")
                        .text(label || "")
                    ;
                }
                rawData.links.forEach(function (link, idx) {
                    edges.push(createEdge(vertices[link.source], vertices[link.target]).weight(link.value));
                }, graph);

                graph.data({ vertices: vertices, edges: edges });
                return graph;
            },
            vertex: function() {
                var ret = new Vertex();
                ret
                    ._icon._faChar.char(DataFactory.FAChar.simple.char)
                ;
                ret
                    ._textBox._text.text(DataFactory.Text.simple.text)
                ;
                ret
                    .annotationIcons(DataFactory.Graph.vertex.annotationIcons)
                ;
                console.log(ret._textBox._text.text);
                return ret
            }
        }
    };
}));
